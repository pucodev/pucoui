import { Input } from '../pucoui/Input'

/**
 *
 * @param {object} props
 * @property {boolean} [disabled]
 * @property {string} [className]
 * @returns
 */
export default function InputBase({ disabled, className, ...props }) {
  return (
    <Input
      disabled={disabled}
      type="text"
      placeholder="Ingrese su correo"
      className={className}
      {...props}
    />
  )
}
