// Plugin that converts React components into static HTML files for use in documentation/code blocks
import * as watcher from '@parcel/watcher'
import 'tsx/esm'
import path from 'path'
import fs from 'fs/promises'
import { spawn } from 'child_process'

// Configuration
const BASE_DIR = './src/components/html' // Source directory containing React components
const OUTPUT_DIR = './src/components/generated' // Destination directory for generated HTML

/**
 * Compiles a single file using the compile.js script.
 * @param {string} filePath - The absolute path to the file to compile.
 */
function convertToHtml(filePath) {
  return new Promise((resolve, reject) => {
    const process = spawn(
      'npx',
      [
        'tsx',
        './plugins/convert-html/htmlConverter.js',
        filePath,
        BASE_DIR,
        OUTPUT_DIR,
      ],
      { stdio: 'inherit' },
    )
    process.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Compilation failed for ${filePath}`))
      }
    })
  })
}

async function cleanDirectory(dir) {
  await fs.rm(dir, { recursive: true, force: true }).catch(() => {})
  await fs.mkdir(dir, { recursive: true })
}

/**
 * Recursively walk through a directory and convert all valid component files to HTML
 * @param {string} dir - Directory to traverse
 */
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else {
      await convertToHtml(full)
    }
  }
}

// Step 1: Clean output directory before starting
await cleanDirectory(OUTPUT_DIR)

// Step 2: Initial build – convert all existing component files
await walk(BASE_DIR)
console.log('ℹ️ Initial build complete')

/**
 * Step 3: Subscribe to file system events and recompile changed files
 */
const sub = await watcher.subscribe(BASE_DIR, async (err, events) => {
  if (err) {
    console.error('❌ Watcher error:', err)
    return
  }
  for (const e of events) {
    console.log(`📄 ${e.type.toUpperCase()} → ${e.path}`)
    convertToHtml(e.path)
  }
})

// Step 4: Gracefully shut down on Ctrl+C
process.on('SIGINT', async () => {
  console.log('\n👋 Closing watcher…')
  await sub.unsubscribe()
  process.exit(0)
})
