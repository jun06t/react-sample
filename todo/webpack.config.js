module.exports = {
  entry: __dirname + "/js/app.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
