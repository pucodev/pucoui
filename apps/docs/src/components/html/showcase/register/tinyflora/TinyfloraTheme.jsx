export const tinyfloraThemeStyle = `
  /* INIT THEME VARIABLES */
  :root {
    --pui-color-primary: #000000;
    --pui-ui-color-text-muted: #71777a;
  }
`
export default function TinyfloraTheme() {
  return <style>{tinyfloraThemeStyle}</style>
}
