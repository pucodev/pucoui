import TableBase from '../../docs/TableBase'

export default function TableSizes() {
  return (
    <div className="is-stack">
      <h6>size: sm</h6>
      <TableBase className="is-bg-white" total={2} size="sm" />

      {'\n\n'}
      <h6>size: md</h6>
      <TableBase className="is-bg-white" total={2} size="md" />

      {'\n\n'}
      <h6>size: lg</h6>
      <TableBase className="is-bg-white" total={2} size="lg" />
    </div>
  )
}
