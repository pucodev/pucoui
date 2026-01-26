-- lua/pucoui/cmp.lua
local M = {}

local cmp
local classes
local context

function M.setup()
  cmp = require("cmp")
  classes = require("pucoui.nvim-classes")
  context = require("pucoui.context")

  cmp.register_source("pucoui", M.source)
end

M.source = {}

function M.source:is_available()
  return context.in_class_attribute()
end

-- ✅ FIRMA CORRECTA
function M.source:complete(_, callback)
  local items = {}

  for name, meta in pairs(classes) do
    items[#items + 1] = {
      label = name,
      kind = cmp.lsp.CompletionItemKind.Class,
      documentation = meta.description,
    }
  end

  callback({ items = items })
end

return M
