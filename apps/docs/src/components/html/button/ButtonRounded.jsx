import { Button } from '../../pucoui/Button'

export default function ButtonRounded() {
  return (
    <div className="is-flex is-gap-3">
      <Button rounded color="primary">
        Rounded primary
      </Button>
      <Button outlined rounded color="info">
        Rounded outlined info
      </Button>
      <Button tonal rounded color="success">
        Rounded tonal success
      </Button>
    </div>
  )
}
