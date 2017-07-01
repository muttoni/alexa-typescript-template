
var path = require('path')
var BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'dist.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'commonjs',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'awesome-typescript-loader'.
      {
        test: /\.ts(x?)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          useBabel: true,
          useCache: true,
          babelOptions: {
            presets: [
                ['env', {targets: {node: '6.10'}}], 'babili'
            ],
            plugins: [require('babili')]
            //presets: ['es2015']
          },
        },
      },
      //{ test: /\.ts(x?)$/, loader: "awesome-typescript-loader"},

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
    ],
  },
  plugins: [
    new BabiliPlugin()
  ],
  target: 'node',

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between
  // builds.
  externals: {react: 'React', 'react-dom': 'ReactDOM', 'aws-sdk': 'aws-sdk'}
}