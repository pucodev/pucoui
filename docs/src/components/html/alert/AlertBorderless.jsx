import { AlertBase } from '../../docs/Alert'
import {
  Alert,
  AlertBody,
  AlertContent,
  AlertHeader,
  AlertIcon,
} from '../../pucoui/Alert'
import ReactComment from '../../ReactComment'

export default function AlertBorderless() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <AlertBase tonal borderless color="error" />

      {'\n\n'}
      <Alert color="warning" tonal={true} borderless={true} accentBorder={true}>
        <AlertContent>
          <AlertBody>8 mensajes sin leer.</AlertBody>
        </AlertContent>
      </Alert>
    </div>
  )
}
