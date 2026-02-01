local M = {}

local cmp
local variables
local context

function M.setup()
  cmp = require("cmp")
  variables = require("pucoui.nvim-variables")
  context = require("pucoui.context-variables")

  cmp.register_source("pucoui-vars", M.source)
end

M.source = {}

function M.source:is_available()
  return context.in_css_var_function()
end

function M.source:complete(_, callback)
  local items = {}

  for name, meta in pairs(variables) do
    items[#items + 1] = {
      label = name,
      insertText = name,
      kind = cmp.lsp.CompletionItemKind.Variable,
      documentation = meta.description,
    }
  end

  callback({ items = items })
end

return M
