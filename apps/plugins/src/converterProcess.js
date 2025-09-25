import path from 'path'

import { convertToHtmlUtil } from './htmlConverter'

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

convertToHtmlUtil(path.resolve(fileToCompile), BASE_DIR, OUTPUT_DIR)
