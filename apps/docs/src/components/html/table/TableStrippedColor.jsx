import TableBase from '../../docs/TableBase'

export default function TableStrippedColor() {
  return (
    <div className="is-stack">
      <h6>color: primary</h6>
      <TableBase isStriped color="primary" className="is-bg-white" />

      {'\n\n'}
      <h6>color: error</h6>
      <TableBase isStriped color="error" className="is-bg-white" />
    </div>
  )
}
