var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var tests = require('./src/config').tests;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // context: __dirname,
  // devtool: 'source-map',
  entry: tests.reduce((obj, test) => {
    obj[test.name] = test.entry;
    return obj;
  }, {
    index: './src/index'
  }),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'dist/[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  toolbox: {
    theme: path.join(__dirname, 'src/react-toolbox/config.scss')
  },
  postcss: [autoprefixer],
  plugins: tests.map(test => new HtmlWebpackPlugin({
    filename: test.filename,
    title: `${test.framework} - ${test.component}`,
    chunks: [test.name],
    inject: false,
    template: require('html-webpack-template'),
    appMountId: 'container'
  }))
  .concat(
    new HtmlWebpackPlugin({
      title: `Index`,
      chunks: ['index'],
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'container'
    }),
    new ExtractTextPlugin('dist/[name].css', { allChunks: true }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
        }
      }
    })
  )
};
