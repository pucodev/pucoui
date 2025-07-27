export const tinyfloraFontStyles = `
  /* SET FONT STYLES */
  html {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    background-color: #fff;
    line-height: 1.25;
  }
`
export default function TinyfloraFont() {
  return <style>{tinyfloraFontStyles}</style>
}
