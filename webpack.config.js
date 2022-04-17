require('core-js/stable');
require('regenerator-runtime/runtime');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = 'style-loader';

const config  = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'main.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
            ],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
            stylesHandler,
            'css-loader',
            'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset',
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
}