import { Badge } from '../../pucoui/Badge'

export default function BadgeOutlined() {
  return (
    <div className="is-flex is-gap-3">
      <Badge outlined color="primary">
        Primary
      </Badge>
      <Badge outlined color="info">
        Info
      </Badge>
      <Badge outlined color="success">
        Success
      </Badge>
      <Badge outlined color="warning">
        Warning
      </Badge>
      <Badge outlined color="error">
        Error
      </Badge>
    </div>
  )
}
