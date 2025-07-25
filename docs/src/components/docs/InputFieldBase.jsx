import { Field, FieldHelpText, FieldLabel, Input } from '../pucoui/Input'

/**
 *
 * @param {Object} props
 * @property {boolean} [isValid]
 * @property {boolean} [isInvalid]
 * @returns
 */
export default function InputFieldBase({ isValid, isInvalid, ...props }) {
  return (
    <Field
      {...props}
      className={`${isValid ? 'is-valid' : ''} ${isInvalid ? 'is-invalid' : ''}`}
    >
      <FieldLabel>Numero de documento</FieldLabel>
      <Input type="text" placeholder="Ingresa tu número de documento" />
      <FieldHelpText>Debe tener mas de 6 caracteres</FieldHelpText>
    </Field>
  )
}
