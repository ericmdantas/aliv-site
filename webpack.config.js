const path = require('path');

module.exports = (env) => {
  return {
    entry: './client/dev/index.js',
    devtool: 'source-map',
    output: {
      path: './client/dev/',
      publicPath: '/client/dev',
      filename: 'bundle.js'
    },
    resolve: {
      root: path.resolve(__dirname, '.')
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
