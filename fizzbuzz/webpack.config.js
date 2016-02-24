module.exports = {
  entry: __dirname + "/src/fizzbuzz.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "fizzbuzz.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
