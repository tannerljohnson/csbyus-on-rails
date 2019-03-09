module.exports = {
  test: /\.md$/,
  use: [{
    loader: 'babel!react-markdown'
  }]
}
