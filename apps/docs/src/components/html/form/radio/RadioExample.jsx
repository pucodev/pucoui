import { Radio, RadioField, RadioLabel } from '../../../pucoui/Radio'

export default function RadioExample() {
  return (
    <div className="is-stack">
      <div>
        <div className="is-font-bold">¿Cuál es tu saga favorita?</div>
        <div className="is-font-size-7 is-text-outline">
          Escoger con sabiduría tu debes
        </div>
      </div>
      <div className="is-stack is-gap-1">
        {'\n\n'}
        <RadioField>
          <Radio name="moview2" id="radio2-1" />
          <RadioLabel htmlFor="radio2-1">Star Wars</RadioLabel>
        </RadioField>

        {'\n\n'}
        <RadioField>
          <Radio name="moview2" id="radio2-2" />
          <RadioLabel htmlFor="radio2-2">Harry Potter</RadioLabel>
        </RadioField>

        {'\n\n'}
        <RadioField>
          <Radio name="moview2" id="radio2-3" />
          <RadioLabel htmlFor="radio2-3">Mad Max</RadioLabel>
        </RadioField>
      </div>
    </div>
  )
}
