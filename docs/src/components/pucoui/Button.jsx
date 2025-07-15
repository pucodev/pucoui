/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content of the button
 * @param {import("../variables").Color} [props.color] - Color of the button
 * @param {boolean} [props.outlined] - Whether the button is outlined
 * @param {boolean} [props.tonal] - Whether the button is tonal
 * @param {'sm' | 'md' | 'lg'} [props.size] - Size of the button
 * @param {boolean} [props.rounded] - Whether the button has rounded corners
 * @returns
 */
export function Button({
  children,
  color,
  outlined,
  tonal,
  size,
  rounded,
  ...props
}) {
  return (
    <button
      className={`btn ${color ? `is-${color}` : ''} ${tonal ? 'is-tonal' : ''} ${outlined ? 'is-outlined' : ''} ${size ? `is-${size}` : ''} ${rounded ? 'is-rounded' : ''}`}
    >
      {children}
    </button>
  )
}

export function ButtonIcon({ icon, ...props }) {
  return <iconify-icon className="icon" icon={icon} {...props}></iconify-icon>
}

export default {
  Button,
  ButtonIcon,
}
