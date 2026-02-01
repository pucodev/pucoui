local ts_utils = require("nvim-treesitter.ts_utils")

local M = {}

function M.in_css_var_function()
  local node = ts_utils.get_node_at_cursor()

  while node do
    local t = node:type()

    -- css / scss
    if t == "function_name" then
      local text = vim.treesitter.get_node_text(node, 0)
      if text == "var" then
        return true
      end
    end

    if t == "call_expression" or t == "function_call" then
      local fn = node:child(0)
      if fn then
        local text = vim.treesitter.get_node_text(fn, 0)
        if text == "var" then
          return true
        end
      end
    end

    node = node:parent()
  end

  return false
end

return M
