import { Button, ButtonIcon } from '../../pucoui/Button'

export default function ButtonIcons() {
  return (
    <div className="is-flex is-gap-3">
      <Button color="error">
        <ButtonIcon icon="mdi:trash" />
        <span>Delete</span>
      </Button>

      {`\n\n`}
      <Button color="info" outlined>
        <span>Info</span>
        <ButtonIcon icon="mdi:info" />
      </Button>

      {`\n\n`}
      <Button color="warning" tonal>
        <span>Warning</span>
        <ButtonIcon icon="mdi:warning" />
      </Button>

      {`\n\n`}
      <Button color="primary" rounded>
        <ButtonIcon icon="mdi:home" />
        <span>Home</span>
      </Button>
    </div>
  )
}
