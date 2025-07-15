import { Button } from '../../pucoui/Button'

export default function ButtonTonals() {
  return (
    <div className="is-flex is-gap-3">
      <Button tonal color="primary">
        Tonal primary
      </Button>
      <Button tonal color="info">
        Tonal info
      </Button>
      <Button tonal color="success">
        Tonal success
      </Button>
      <Button tonal color="warning">
        Tonal warning
      </Button>
    </div>
  )
}
