export const tinyfloraClasses = `
  /* PROJECT CLASSES */
  .blur-card {
    background-color: rgba(128, 128, 128, 0.2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
`

export default function TinyfloraClass() {
  return <style>{tinyfloraClasses}</style>
}
