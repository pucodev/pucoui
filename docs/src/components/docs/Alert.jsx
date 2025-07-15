import {
  Alert,
  AlertBody,
  AlertContent,
  AlertHeader,
  AlertIcon,
} from '../pucoui/Alert'

export const ALERT_TITLE = '¡_Alto!'
export const ALERT_CONTENT = 'Es hora de descansar un momento ¡Dísfrutalo!'

/**
 *
 * @param {Object} params
 * @param {string} [params.color] - The color of the alert.
 * @param {boolean} [params.tonal] - Whether the alert is tonal.
 * @param {boolean} [params.borderless] - Whether the alert has no border.
 * @param {boolean} [params.accentBorder] - Whether the alert has an accent border.
 * @param {string} [params.icon] - The icon to display in the alert.
 * @returns
 */
export function AlertBase({ color, tonal, borderless, accentBorder, icon }) {
  return (
    <Alert
      color={color}
      tonal={tonal}
      borderless={borderless}
      accentBorder={accentBorder}
    >
      <AlertIcon icon={icon || 'mdi:home-outline'} />
      <AlertContent>
        <AlertHeader>¡Hola!</AlertHeader>
        <AlertBody>Es hora de descansar un momento ¡Dísfrutalo!</AlertBody>
      </AlertContent>
    </Alert>
  )
}

export default {
  AlertBase,
}
