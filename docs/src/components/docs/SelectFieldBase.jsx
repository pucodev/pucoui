import { Field, FieldHelpText, FieldLabel } from '../pucoui/Field'
import SelectBase from './SelectBase'

/**
 *
 * @param {object} props
 * @property {boolean} [isValid]
 * @property {boolean} [isInvalid]
 * @returns
 */
export default function SelectFieldBase({ isValid, isInvalid, ...props }) {
  return (
    <Field
      {...props}
      className={`${isValid ? 'is-valid' : ''} ${isInvalid ? 'is-invalid' : ''}`}
    >
      <FieldLabel>Seleccione un personaje</FieldLabel>
      <SelectBase />
      <FieldHelpText>Debe seleccionar por lo menos un personaje</FieldHelpText>
    </Field>
  )
}
