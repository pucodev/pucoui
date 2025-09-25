import InputFieldBase from './InputFieldBase'
import TextareaFieldBase from './TextareaFieldBase'

/**
 *
 * @param {object} props
 * @property {'input' | 'select' | 'textarea'} type
 * @returns
 */
export default function FieldBase({ type }) {
  let Component = <InputFieldBase />
  switch (type) {
    case 'input':
      Component = <InputFieldBase />
      break

    case 'textarea':
      Component = <TextareaFieldBase />
      break

    default:
      break
  }
  return Component
}
