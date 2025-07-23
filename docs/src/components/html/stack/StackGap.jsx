export function StackItem({ index }) {
  const color = index % 2 === 0 ? 'info' : 'primary'
  return <div className={`is-bg-${color} p-3 is-rounded-2`}>Item {index}</div>
}

export function StackRow({ gap }) {
  return (
    <div className={`is-stack is-gap-${gap} is-color-white`}>
      <StackItem index={1} />
      <StackItem index={2} />
      <StackItem index={3} />
    </div>
  )
}

export default function StackGap() {
  return (
    <div className="is-stack">
      <h5>Gap: 4</h5>
      <StackRow gap="4" />

      {'\n\n'}
      <h5>Gap: 2</h5>
      <StackRow gap="2" />
    </div>
  )
}
