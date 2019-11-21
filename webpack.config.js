const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.warn(path.resolve(__dirname, 'lib/'));

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'amd'
  },
  resolve: {
    alias: {
      pool: path.resolve(__dirname, 'lib/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-react']
          }
        }
      }
    ]
  },
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      title: 'development'
    })
  ]
};