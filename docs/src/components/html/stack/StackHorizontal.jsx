export default function StackHorizontal() {
  return (
    <div
      className="is-hstack is-color-white"
      style={{ maxWidth: '400px', height: '120px' }}
    >
      <div
        className="is-bg-primary p-3 is-rounded-2 w-100"
        style={{ height: '100%' }}
      ></div>
      <div
        className="is-bg-info p-3 is-rounded-2 w-100"
        style={{ height: '30%' }}
      ></div>
      <div
        className="is-bg-primary p-3 is-rounded-2 w-100"
        style={{ height: '50%' }}
      ></div>
    </div>
  )
}
