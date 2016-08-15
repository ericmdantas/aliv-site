module.exports = (env) => {
  return {
    entry: './index.js',
    output: {
      path: '.',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /.\css$/,
          loader: 'style!css!'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules)/
        }
      ]
    }
  }
}
