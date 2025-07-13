import path from 'path'
import fs from 'fs/promises'
import glob from 'fast-glob'
import { renderToStaticMarkup } from 'react-dom/server'
import * as prettier from 'prettier/standalone'
import * as parserHtml from 'prettier/plugins/html'

// Add Babel support for JSX
require('@babel/register')({
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  only: [/src\/components/],
})

export default async function GenerateHtml(context, options) {
  const { siteDir } = context
  const htmlDir = 'src/components/html'
  const componentPaths = `${htmlDir}/**/*.jsx`

  return {
    name: 'pucoui-generate-html',

    getPathsToWatch() {
      // This tells Docusaurus to re-run loadContent when these files change.
      return glob.sync(path.join(siteDir, componentPaths))
    },

    async loadContent() {
      const filePaths = await glob(componentPaths)

      console.log('👋  Generating HTML from components...')
      console.log('Found components:', filePaths)

      const prettierCfg = {
        parser: 'html',
        plugins: [parserHtml],
        printWidth: 80,
      }

      const results = await Promise.all(
        filePaths.map(async (absPath) => {
          const resolvedPath = path.resolve(siteDir, absPath)
          // Bust the require cache to ensure we get the latest version of the file
          if (require.cache[resolvedPath]) {
            delete require.cache[resolvedPath]
          }
          const mod = await import(resolvedPath)
          const Component = mod.default || mod

          if (!Component) {
            console.warn(`No default export found in ${absPath}, skipping.`)
            return null
          }

          const rawHtml = renderToStaticMarkup(Component())
          const html = await prettier.format(rawHtml, prettierCfg)

          return {
            absPath,
            html,
            relPath: absPath.replace(`${htmlDir}/`, ''),
          }
        }),
      )

      console.log(
        `Successfully generated HTML for ${results.length} components.`,
      )
      return results
    },

    async contentLoaded({ content }) {
      if (!content || content.length === 0) {
        return
      }

      const { siteDir } = context
      const baseComponentDir = path.join(siteDir, htmlDir)
      const outputBaseDir = path.join(siteDir, 'src', 'components', 'generated')

      await Promise.all(
        content.map(async ({ absPath, html }) => {
          const relativeToHtmlDir = path.relative(baseComponentDir, absPath)
          const outputHtmlSubPath = relativeToHtmlDir.replace(
            path.extname(relativeToHtmlDir),
            '.html',
          )

          // Construct the full output path for the HTML file
          const htmlOutputPath = path.join(outputBaseDir, outputHtmlSubPath)

          // Ensure the parent directory for the HTML file exists
          const parentDir = path.dirname(htmlOutputPath)
          try {
            await fs.mkdir(parentDir, { recursive: true })
          } catch (err) {
            console.error(`Error creating directory ${parentDir}:`, err)
            return
          }

          // Write the individual HTML file
          try {
            await fs.writeFile(htmlOutputPath, html)
            console.log(`✅ Save HTML: ${outputHtmlSubPath}`)
          } catch (err) {
            console.error(`⚠️ Error writing HTML to ${htmlOutputPath}:`, err)
          }
        }),
      )
    },

    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.html$/i,
              resourceQuery: /raw/, // SOLO cuando el import lleva ?raw
              type: 'asset/source', // Webpack 5: devuelve string
            },
          ],
        },
      }
    },
  }
}
