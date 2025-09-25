import { AlertBase } from '../../docs/Alert'
import ReactComment from '../../ReactComment'

export default function AlertColors() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <ReactComment text="is-primary" />
      <AlertBase color="primary" />

      {'\n\n'}
      <ReactComment text="is-warning" />
      <AlertBase color="warning" icon="mdi:alert-circle-outline" />

      {'\n\n'}
      <ReactComment text="is-error" />
      <AlertBase color="error" icon="mdi:alert-outline" />
    </div>
  )
}
