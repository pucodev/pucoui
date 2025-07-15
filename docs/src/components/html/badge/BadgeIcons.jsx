import { Badge, BadgeIcon } from '../../pucoui/Badge'

export default function BadgeIcons() {
  return (
    <div className="is-flex is-gap-3">
      <Badge outlined color="primary">
        <BadgeIcon icon="mdi:check" />
        <span>Primary</span>
      </Badge>

      {'\n\n'}
      <Badge color="info">
        <span>Info</span>
        <BadgeIcon icon="mdi:info" />
      </Badge>

      {'\n\n'}
      <Badge tonal color="error">
        <BadgeIcon icon="mdi:warning" />
        <span>Error</span>
      </Badge>

      {'\n\n'}
      <Badge color="primary">
        <BadgeIcon icon="mdi:home" />
      </Badge>
    </div>
  )
}
