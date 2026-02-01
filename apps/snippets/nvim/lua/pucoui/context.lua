local ts_utils = require("nvim-treesitter.ts_utils")

local M = {}

function M.in_class_attribute()
  local node = ts_utils.get_node_at_cursor()

  while node do
    local t = node:type()

    -- HTML / Astro / Vue / Svelte
    if t == "attribute" then
      local name = node:child(0)
      if name then
        local text = vim.treesitter.get_node_text(name, 0)
        if text == "class" or text == "className" then
          return true
        end
      end
    end

    -- JSX / TSX
    if t == "jsx_attribute" then
      local name_node = node:child(0)
      local value_node = node:child(1)

      if name_node and value_node then
        local attr_name = vim.treesitter.get_node_text(name_node, 0)

        if attr_name == "class" or attr_name == "className" then
          return true
        end
      end
    end

    node = node:parent()
  end

  return false
end

return M
