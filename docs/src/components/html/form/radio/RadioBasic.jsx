import { Radio, RadioField, RadioLabel } from '../../../pucoui/Radio'

export default function RadioBasic() {
  return (
    <>
      <RadioField>
        <Radio name="moview" id="radio1" />
        <RadioLabel htmlFor="radio1">Star Wars</RadioLabel>
      </RadioField>

      {'\n\n'}
      <RadioField>
        <Radio name="moview" id="radio2" />
        <RadioLabel htmlFor="radio2">Harry Potter</RadioLabel>
      </RadioField>
    </>
  )
}
