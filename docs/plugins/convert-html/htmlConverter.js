// Plugin that converts React components into static HTML files for use in documentation/code blocks
import React from 'react'
import 'tsx/esm'
import path from 'path'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs/promises'
import crypto from 'crypto'
import * as prettier from 'prettier/standalone'
import * as parserHtml from 'prettier/plugins/html'

globalThis.React = React

// ********
// Get variables from command line arguments
// ********
const fileToCompile = process.argv[2]
const BASE_DIR = process.argv[3] || '.'
const OUTPUT_DIR = process.argv[4] || '.'

if (!fileToCompile) {
  console.error('❌ No file path provided.')
  process.exit(1)
}

// init global variables
const PROJECT_DIR = process.cwd() // Absolute root of the project
const VALID_EXT = ['.jsx', '.tsx'] // File extensions to watch and convert

/**
 * Check if a file has a valid extension (.jsx or .tsx)
 * @param {string} filePath
 * @returns {boolean}
 */
const isValidFile = (filePath) => VALID_EXT.includes(path.extname(filePath))

/**
 * Get relative path from BASE_DIR for a given absolute path
 * @param {string} absPath
 * @returns {string}
 */
const toBaseRel = (absPath) =>
  path.relative(path.join(PROJECT_DIR, BASE_DIR), absPath)

/**
 * Generate a short SHA256-based hash used to bust module cache
 * @returns {string}
 */
function getCacheBuster() {
  return crypto
    .createHash('sha256')
    .update(Date.now().toString())
    .digest('hex')
    .slice(0, 8)
}

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(src, dest)
}

/**
 * Replace React comments in the HTML string with HTML comments
 * Convert `<span data-react-comment="true" hidden=""><!-- {COMMENT} --></span>` to `<!-- {COMMENT} -->`
 * @param {string} rawHtml
 * @returns Html string with React comments converted to HTML comments
 */
function renderComments(rawHtml) {
  return rawHtml.replace(
    /<span\s+data-react-comment="true"\s+hidden="">\s*<!--([\s\S]*?)-->\s*<\/span>/g,
    '<!-- $1 -->',
  )
}

/**
 * Dynamically import a React component, render it to static HTML, and save it to disk
 * @param {string} filePath - Path to a .jsx or .tsx file
 */
async function convertToHtml(filePath) {
  if (!isValidFile(filePath)) return

  const relPath = toBaseRel(filePath)
  const htmlPath = path
    .join(PROJECT_DIR, OUTPUT_DIR, relPath)
    .replace(path.extname(relPath), '.html')
  const parentDir = path.dirname(htmlPath)

  console.log('🔄 Converting: ', filePath)

  let mod
  try {
    mod = await import(`${filePath}?v=${getCacheBuster()}`)
  } catch (err) {
    console.error('❌ Failed to import module:', filePath, err)
    return
  }

  if (!mod?.default) {
    console.log('⚠️ No default export found in:', filePath)
    return
  }

  await fs.mkdir(parentDir, { recursive: true }).catch(() => {})

  let rawHtml = ''
  try {
    rawHtml = renderToStaticMarkup(React.createElement(mod.default))
  } catch (error) {
    console.log('⚠️ File is not a valid React Component', filePath)
    return
  }

  rawHtml = renderComments(rawHtml)
  console.log('🔍 Rendered HTML:', rawHtml)
  const html = await prettier.format(rawHtml, {
    parser: 'html',
    plugins: [parserHtml],
    printWidth: 80,
  })

  try {
    await fs.writeFile(htmlPath, html)
    console.log('✅ Saved:', htmlPath)
  } catch (err) {
    console.error('❌ Failed to write file:', htmlPath, err)
  }
}

convertToHtml(path.resolve(fileToCompile))
