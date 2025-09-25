export default function StackVertical() {
  return (
    <div className="is-vstack is-color-white" style={{ maxWidth: '400px' }}>
      <div
        className="is-bg-primary p-3 is-rounded-2"
        style={{ width: '80%' }}
      ></div>
      <div
        className="is-bg-info p-3 is-rounded-2"
        style={{ width: '30%' }}
      ></div>
      <div
        className="is-bg-primary p-3 is-rounded-2"
        style={{ width: '50%' }}
      ></div>
    </div>
  )
}
