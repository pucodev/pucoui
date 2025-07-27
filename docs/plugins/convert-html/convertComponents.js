import * as watcher from '@parcel/watcher'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { cleanDirectory, convertToHtml, walk } from './src/util'

// Configuration
const BASE_DIR = './src/components/html' // Source directory containing React components
const OUTPUT_DIR = './src/components/generated' // Destination directory for generated HTML

const argv = yargs(hideBin(process.argv))
  .option('watch-only', {
    alias: 'o',
    type: 'boolean',
    description: 'Solo correr el watch',
  })
  .option('watch', {
    alias: 'w',
    type: 'boolean',
    description: 'Observar archivos en tiempo real',
  })
  .parse()

if (!argv.watchOnly) {
  // Step 1: Clean output directory before starting
  await cleanDirectory(OUTPUT_DIR)

  // Step 2: Initial build – convert all existing component files
  await walk(BASE_DIR, OUTPUT_DIR, false)
  console.log('ℹ️ Initial build complete')
}

if (argv.watch || argv.watchOnly) {
  /**
   * Step 3: Subscribe to file system events and recompile changed files
   */
  const sub = await watcher.subscribe(BASE_DIR, async (err, events) => {
    if (err) {
      console.error('❌ Watcher error:', err)
      return
    }
    for (const e of events) {
      const eventType = e.type.toUpperCase()
      if (['UPDATE'].includes(eventType)) {
        console.log(`📄 ${e.type.toUpperCase()} → ${e.path}`)
        convertToHtml(e.path, BASE_DIR, OUTPUT_DIR, true)
      }
    }
  })

  // Step 4: Gracefully shut down on Ctrl+C
  process.on('SIGINT', async () => {
    console.log('\n👋 Closing watcher…')
    await sub.unsubscribe()
    process.exit(0)
  })
}
