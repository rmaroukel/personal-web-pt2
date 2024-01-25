const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/scripts/index.js',
    contact: './src/scripts/contact.js',
    success: './src/scripts/success.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      // File Loader for Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Output images in images folder without hash
        },
      },
      // HTML Loader
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),

    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['main', 'contact'],
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: './src/projects.html',
      chunks: ['main', 'projects'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html',
      chunks: ['main', 'contact'],
    }),
    new HtmlWebpackPlugin({
      filename: 'success.html',
      template: './src/success.html',
      chunks: ['main', 'success'],
    }),
    new CleanWebpackPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  }
};
