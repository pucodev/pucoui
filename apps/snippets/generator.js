import fs from 'fs'
import { parse } from 'jsonc-parser'
import path from 'path'

const SRC = './classes.jsonc'
const SRC_VARIABLES = './variables.jsonc'
const DIST = './dist'
const NVIM_DIST = './nvim/lua/pucoui'

if (!fs.existsSync(DIST)) {
  fs.mkdirSync(DIST, { recursive: true })
}

if (!fs.existsSync(NVIM_DIST)) {
  fs.mkdirSync(NVIM_DIST, { recursive: true })
}

const raw = fs.readFileSync(SRC, 'utf8')
const rawVariables = fs.readFileSync(SRC_VARIABLES, 'utf8')
const classes = parse(raw)
const variables = parse(rawVariables)

/* -----------------------------
 * Validación mínima
 * ----------------------------- */
for (const [name, meta] of Object.entries(classes)) {
  if (!meta.description) {
    throw new Error(`Class "${name}" is missing description`)
  }
}

/* -----------------------------
 * Core normalizado
 * ----------------------------- */
const core = Object.entries(classes).map(([name, meta]) => ({
  name,
  description: meta.description,
  category: meta.category ?? 'general',
}))

fs.writeFileSync(path.join(DIST, 'core.json'), JSON.stringify(core, null, 2))

/* -----------------------------
 * VS Code (CSS Custom Data)
 * ----------------------------- */
fs.writeFileSync(
  path.join(DIST, 'vscode.css-data.json'),
  JSON.stringify(
    {
      version: 1.1,
      classes: core.map(c => ({
        name: c.name,
        description: c.description,
      })),
    },
    null,
    2,
  ),
)

/* -----------------------------
 * Neovim (data pura para cmp)
 * ----------------------------- */
const lua = `
-- Auto-generated. DO NOT EDIT.
return {
${core
  .map(
    c =>
      `  ["${c.name}"] = { description = "${c.description}", category = "${c.category}" },`,
  )
  .join('\n')}
}
`

fs.writeFileSync(path.join(DIST, 'nvim-classes.lua'), lua)
fs.writeFileSync(path.join(NVIM_DIST, 'nvim-classes.lua'), lua)

const coreVariables = Object.entries(variables).map(([name, meta]) => ({
  name,
  description: meta.description,
}))
const luaVariables = `
-- Auto-generated. DO NOT EDIT.
return {
${coreVariables
  .map(c => `  ["${c.name}"] = { description = "${c.description}" },`)
  .join('\n')}
}
`

fs.writeFileSync(path.join(DIST, 'nvim-variables.lua'), luaVariables)
fs.writeFileSync(path.join(NVIM_DIST, 'nvim-variables.lua'), luaVariables)
