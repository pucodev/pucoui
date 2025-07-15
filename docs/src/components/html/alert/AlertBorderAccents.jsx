import { AlertBase } from '../../docs/Alert'
import {
  Alert,
  AlertBody,
  AlertContent,
  AlertHeader,
  AlertIcon,
} from '../../pucoui/Alert'
import ReactComment from '../../ReactComment'

export default function AlertBorderAccents() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <ReactComment text="is-accent-border is-primary" />
      <AlertBase accentBorder color="primary" />

      {'\n\n'}
      <ReactComment text="is-accent-border is-tonal is-warning" />
      <Alert color="warning" tonal={true} accentBorder={true}>
        <AlertContent>
          <AlertBody>8 mensajes sin leer.</AlertBody>
        </AlertContent>
      </Alert>
    </div>
  )
}
