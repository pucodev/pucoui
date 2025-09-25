import { AlertBase } from '../../docs/Alert'
import ReactComment from '../../ReactComment'

export default function AlertTonals() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <ReactComment text="is-tonal is-primary" />
      <AlertBase tonal color="primary" />

      {'\n\n'}
      <ReactComment text="is-tonal is-warning" />
      <AlertBase tonal color="warning" icon="mdi:alert-circle-outline" />

      {'\n\n'}
      <ReactComment text="is-tonal is-error" />
      <AlertBase tonal color="error" icon="mdi:alert-outline" />
    </div>
  )
}
