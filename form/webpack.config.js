module.exports = {
  entry: __dirname + "/src/form.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "form.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
