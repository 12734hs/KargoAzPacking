const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    clean: true,       // wipe public/ before every build
  },
  performance: {       // silences the bundle-size warning
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'KargoAZ — Shipment Dashboard' }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    // the minimizer block from Stage 2 stays here too
    minimizer: [
      '...',   // do NOT delete this — it keeps JS minification
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: { plugins: [['pngquant', { quality: [0.6, 0.8] }]] },
        },
      }),
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8564,
    hot: true,
    allowedHosts: "all"
  },
};