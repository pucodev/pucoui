/**
 * @typedef {object} IconProps
 * @property {string} props.icon - Icon name - @see https://icon-sets.iconify.design
 * @property {string} [props.className] - Additional CSS classes.
 */

/**
 * Main Card component.
 * @param {React.HTMLAttributes<HTMLDivElement> & IconProps} props
 * @returns {import("react").JSX.Element}
 */
export function Icon({ icon, className, ...props }) {
  return (
    <iconify-icon class={`icon ${className || ''}`} icon={icon}></iconify-icon>
  )
}
