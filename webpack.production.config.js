const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(__dirname, 'app/toggler/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: './index.min.js',
    library: 'ReactUIToggler',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              minimize: true,
            },
          }],
        }),
      },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  externals:{
      'react': 'react',
      'react-dom': 'react-dom'      
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'react-ui-toggler.min.css',
      allChunks: true,
    })
  ],
};
