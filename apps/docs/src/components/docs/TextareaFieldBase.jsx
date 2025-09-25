import { Field, FieldHelpText, FieldLabel } from '../pucoui/Field'
import { Textarea } from '../pucoui/Textarea'
import ReactComment from '../ReactComment'

/**
 *
 * @param {Object} props
 * @property {boolean} [isValid]
 * @property {boolean} [isInvalid]
 * @returns
 */
export default function TextareaFieldBase({ isValid, isInvalid, ...props }) {
  return (
    <Field
      {...props}
      className={`${isValid ? 'is-valid' : ''} ${isInvalid ? 'is-invalid' : ''}`}
    >
      <FieldLabel>Descripción</FieldLabel>
      <Textarea placeholder="Ingresa una pequeña descripción" />

      {'\n\n'}
      <ReactComment text="Opcional" />
      <FieldHelpText>Debe tener menos de 200 caracteres</FieldHelpText>
    </Field>
  )
}
