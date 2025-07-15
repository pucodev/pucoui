import { Button } from '../../pucoui/Button'

export default function ButtonOutlined() {
  return (
    <div className="is-flex is-gap-3">
      <Button outlined color="primary">
        Outlined primary
      </Button>
      <Button outlined color="info">
        Outlined info
      </Button>
      <Button outlined color="success">
        Outlined success
      </Button>
      <Button outlined color="warning">
        Outlined warning
      </Button>
    </div>
  )
}
