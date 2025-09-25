import ReactComment from '../../ReactComment'

export default function IconSizes() {
  return (
    <div className="is-flex is-flex-column is-gap-3">
      <ReactComment text="DEFAULT" />
      <iconify-icon class="icon" icon="mdi:account-outline"></iconify-icon>

      {'\n\n'}
      <ReactComment text="MEDIUM" />
      <iconify-icon
        class="icon is-md"
        icon="mdi:account-outline"
      ></iconify-icon>

      {'\n\n'}
      <ReactComment text="LARGE" />
      <iconify-icon
        class="icon is-lg"
        icon="mdi:account-outline"
      ></iconify-icon>
    </div>
  )
}
