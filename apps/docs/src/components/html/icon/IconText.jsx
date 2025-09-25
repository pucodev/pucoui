export default function IconText() {
  return (
    <div className="is-flex is-flex-column gap-4">
      <span className="icon-text">
        <iconify-icon className="icon" icon="mdi:home"></iconify-icon>
        <span>Home</span>
      </span>

      {'\n\n'}
      <p>
        Esto es un texto con iconos como{' '}
        <span className="icon-text">
          <iconify-icon
            className="icon"
            icon="mdi:account-outline"
          ></iconify-icon>{' '}
          <span>, </span>
          <iconify-icon className="icon" icon="mdi:home"></iconify-icon>{' '}
          <span>, </span>
          <iconify-icon
            className="icon is-color-error"
            icon="mdi:warning"
          ></iconify-icon>{' '}
        </span>{' '}
        y otros íconos
      </p>
    </div>
  )
}
