export default (req, res) => {
  const {
    query: {hello},
  } = req
  res.status(200).json({text: hello.join(' ')})
}
