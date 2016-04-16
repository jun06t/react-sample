module.exports = {
  entry: __dirname + "/js/app.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
