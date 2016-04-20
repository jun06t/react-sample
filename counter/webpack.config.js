module.exports = {
  entry: __dirname + "/src/counter.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "counter.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
