import { Switch } from '../../../pucoui/Switch'

export default function SwitchBasic() {
  return (
    <div className="is-hstack">
      <Switch id="switch2" />
      <label htmlFor="switch2">Activar la carta</label>
    </div>
  )
}
