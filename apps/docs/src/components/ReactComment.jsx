export default function ReactComment({ text }) {
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
