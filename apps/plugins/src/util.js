// Plugin that converts React components into static HTML files for use in documentation/code blocks
import { spawn } from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import 'tsx/esm'

import { convertToHtmlUtil } from './htmlConverter'

/**
 * Compiles a single file using the compile.js script.
 * @param {string} filePath - The absolute path to the file to compile.
 * @param {string} basePath
 * @param {string} outputPath
 * @param {boolean} useSubprocess
 */
export function convertToHtml(filePath, basePath, outputPath, useSubprocess) {
  if (useSubprocess) {
    return new Promise((resolve, reject) => {
      const process = spawn(
        'npx',
        [
          'tsx',
          './src/converterProcess.js',
          filePath,
          basePath,
          outputPath,
          // BASE_DIR,
          // OUTPUT_DIR,
        ],
        { stdio: 'inherit' },
      )
      process.on('close', code => {
        if (code === 0) {
          resolve('')
        } else {
          reject(new Error(`Compilation failed for ${filePath}`))
        }
      })
    })
  } else {
    return convertToHtmlUtil(path.resolve(filePath), basePath, outputPath)
  }
}

export async function cleanDirectory(dir) {
  await fs.rm(dir, { recursive: true, force: true }).catch(() => {})
  await fs.mkdir(dir, { recursive: true })
}

/**
 * Recursively walk through a directory and convert all valid component files to HTML
 * @param {string} dir - Directory to traverse
 * @param {string} outputPath
 * @param {boolean} useSubprocess
 * @param {string} [basePath]
 */
export async function walk(dir, outputPath, useSubprocess, basePath) {
  basePath = basePath || dir
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, outputPath, useSubprocess, basePath)
    } else {
      await convertToHtml(full, basePath, outputPath, useSubprocess)
    }
  }
}
