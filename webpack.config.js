const path = require("path");

module.exports = {
  entry: ['./client/src/app.js'],
  output: {
    path: path.join(__dirname, './server/public'),
    filename: './js/bundle.js',
	publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};