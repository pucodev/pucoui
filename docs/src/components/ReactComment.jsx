export default function SimpleAlertBase({ text }) {
  return (
    <span
      data-react-comment
      hidden
      dangerouslySetInnerHTML={{
        __html: `<!-- ${text} -->`,
      }}
    />
  )
}
