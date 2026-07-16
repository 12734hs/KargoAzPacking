const path = require('path') 
export default {
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
};