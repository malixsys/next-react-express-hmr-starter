const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: ['./server/index.ts', 'webpack/hot/poll?1000'],
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.server.json' })],
    extensions: ['.js', '.ts', '.json']
  },
  optimization: {
    moduleIds: 'named',
    emitOnErrors: true
  },
  externals: [nodeExternals({ allowlist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader'
        }
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader',
          options: {
            sync: false,
            env: {
              targets: 'last 1 chrome major versions'
            },
            jsc: {
              // https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
              target: 'es2021',
              keepClassNames: true,
              transform: {
                legacyDecorator: true,
                decoratorMetadata: true
              },
              parser: {
                syntax: 'typescript',
                tsx: false,
                decorators: true
              },
              loose: true
            },
            module: {
              type: 'commonjs'
            },
            minify: false
          }
        }
      }
    ]
  },
  plugins: [
    /*
    new ForkTsCheckerWebpackPlugin()
     */
    new RunScriptWebpackPlugin({
      name: 'admin.js',
      nodeArgs: [] //`--require`, 'dotenv/config', '--inspect-brk=9229']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  output: { path: path.join(__dirname, 'dist'), filename: 'admin.js' }
};
