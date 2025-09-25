import { Textarea } from '../pucoui/Textarea'

/**
 *
 * @param {object} props
 * @property {boolean} [disabled]
 * @property {string} [className]
 * @returns
 */
export default function TextareaBase({ disabled, className, ...props }) {
  return (
    <Textarea
      disabled={disabled}
      placeholder="Agregue una pequeña descripcion"
      className={className}
      {...props}
    />
  )
}
