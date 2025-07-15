import { Badge } from '../../pucoui/Badge'

export default function BadgeSizes() {
  return (
    <div className="is-flex is-gap-3 is-align-items-flex-start">
      <Badge size="md" color="primary">
        Primary
      </Badge>
      <Badge size="lg" color="info">
        Info
      </Badge>
    </div>
  )
}
