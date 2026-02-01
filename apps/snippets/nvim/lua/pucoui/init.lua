-- lua/pucoui/init.lua
local M = {}

function M.setup(opts)
  opts = opts or {}

  if opts.cmp ~= false then
    require("pucoui.cmp").setup(opts.cmp or {})
    require("pucoui.cmp-variables").setup(opts.cmp or {})
  end
end

return M
