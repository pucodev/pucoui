import { SelectNative } from '../pucoui/SelectNative'

/**
 *
 * @param {object} props
 * @property {boolean} [isMultiple]
 * @property {boolean} [disabled]
 * @returns
 */
export default function SelectBase({ isMultiple, disabled }) {
  return (
    <SelectNative multiple={isMultiple} disabled={disabled}>
      <option value="1">Mario Bross</option>
      <option value="2">Luigi Bross</option>
      <option value="3">Koopa Troopa</option>
      <option value="4">Donkey Kong</option>
    </SelectNative>
  )
}
