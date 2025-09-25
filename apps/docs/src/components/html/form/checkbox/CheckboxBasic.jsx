import {
  Checkbox,
  CheckboxField,
  CheckboxLabel,
} from '../../../pucoui/Checkbox'

export default function () {
  return (
    <div className="is-stack">
      <CheckboxField>
        <Checkbox id="input1" />
        <CheckboxLabel htmlFor="input1">Coding</CheckboxLabel>
      </CheckboxField>

      {'\n\n'}
      <CheckboxField>
        <Checkbox id="input2" />
        <CheckboxLabel htmlFor="input2">
          Aceptas los <a href="#">términos y condiciones</a>
        </CheckboxLabel>
      </CheckboxField>

      {'\n\n'}
      <CheckboxField>
        <Checkbox id="input3" />
        <CheckboxLabel htmlFor="input3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quae
          tandem ista ratio est? Quaerimus enim finem bonorum. Quamquam id
          quidem, infinitum est in hac urbe
        </CheckboxLabel>
      </CheckboxField>
    </div>
  )
}
