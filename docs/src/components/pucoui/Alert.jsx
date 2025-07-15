/**
 *
 * @param {Object} props
 * @param {string} [props.color] - The color of the alert.
 * @param {boolean} [props.tonal] - Whether the alert is tonal.
 * @param {boolean} [props.borderless] - Whether the alert has no border.
 * @param {boolean} [props.accentBorder] - Whether the alert has an accent border.
 * @param {string} [props.icon] - The icon to display in the alert.
 * @param {React.ReactNode} [props.children] - The content of the alert.
 * @returns
 */
export function Alert({
  children,
  color,
  tonal,
  borderless,
  accentBorder,
  ...props
}) {
  return (
    <div
      className={`alert ${color ? `is-${color}` : ''} ${tonal ? `is-tonal` : ''} ${borderless ? `is-borderless` : ''} ${accentBorder ? 'is-accent-border' : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 *
 * @param {Object} props
 * @param {string} props.icon - Icon to display in the alert
 * @returns
 */
export function AlertIcon({ icon, ...props }) {
  return <iconify-icon class="icon" icon={icon} {...props}></iconify-icon>
}

export function AlertContent({ children, ...props }) {
  return (
    <div className="alert-content" {...props}>
      {children}
    </div>
  )
}

export function AlertHeader({ children, ...props }) {
  return (
    <div className="alert-header" {...props}>
      {children}
    </div>
  )
}

export function AlertBody({ children, ...props }) {
  return (
    <div className="alert-body" {...props}>
      {children}
    </div>
  )
}

export default {
  Alert,
  AlertIcon,
  AlertContent,
}
