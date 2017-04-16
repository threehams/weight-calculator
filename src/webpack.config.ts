import * as path from 'path';
import * as webpack from 'webpack';
// import SwPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';

const ENTRY_POINTS = {
  development: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './src/index.tsx'],
  production: ['./src/index.tsx'],
};

const ENV = process.env.NODE_ENV || 'development';

const PLUGINS = {
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\'development\'',
      },
    }),
    // new SwPrecacheWebpackPlugin(
    //   {
    //     cacheId: 'weight-calculator',
    //     filename: 'service-worker.js',
    //     maximumFileSizeToCacheInBytes: 4194304,
    //     minify: true,
    //     runtimeCaching: [{
    //       handler: 'cacheFirst',
    //       urlPattern: /[.]mp3$/,
    //     }],
    //   }
    // ),
  ],
  production: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\'production\'',
      },
    }),
    // new SwPrecacheWebpackPlugin(
    //   {
    //     cacheId: 'weight-calculator',
    //     filename: 'service-worker.js',
    //     maximumFileSizeToCacheInBytes: 4194304,
    //     minify: true,
    //     runtimeCaching: [{
    //       handler: 'cacheFirst',
    //       urlPattern: /[.]mp3$/,
    //     }],
    //   }
    // ),
  ],
};

const DEV_TOOLS = {
  development: 'eval',
  production: 'source-map',
};

const configuration: webpack.Configuration = {
  devtool: DEV_TOOLS[ENV],
  entry: ENTRY_POINTS[ENV],
  module: {
    rules: [
      {
        include: [path.join(__dirname, '..', 'src')],
        use: ['react-hot-loader/webpack', 'ts-loader'],
        test: /\.(tsx|ts|js)/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        use: 'json-loader',
        test: /\.json$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/dist/',
  },
  plugins: PLUGINS[ENV],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
};

export default configuration as any;
