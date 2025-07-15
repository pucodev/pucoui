import { Badge } from '../../pucoui/Badge'

export default function BadgeColors() {
  return (
    <div className="is-flex is-gap-3">
      <Badge color="primary">Primary</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  )
}
