import { Badge } from '../../pucoui/Badge'

export default function BadgeTonals() {
  return (
    <div className="is-flex is-gap-3 px-3 py-4 is-bg-white is-rounded-2">
      <Badge tonal color="primary">
        Primary
      </Badge>
      <Badge tonal color="info">
        Info
      </Badge>
      <Badge tonal color="success">
        Success
      </Badge>
      <Badge tonal color="warning">
        Warning
      </Badge>
      <Badge tonal color="error">
        Error
      </Badge>
    </div>
  )
}
