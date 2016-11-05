import * as path from 'path';
import * as webpack from 'webpack';

const ENTRY_POINTS = {
  development: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './src/index.tsx'],
  production: ['./src/index.tsx'],
};

const ENV = process.env.NODE_ENV || 'development';

const PLUGINS = {
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\'development\'',
      },
    }),
  ],
  production: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
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
  ],
};

const DEV_TOOLS = {
  development: 'eval',
  production: 'source-map',
};

export default {
  devtool: DEV_TOOLS[ENV],
  entry: ENTRY_POINTS[ENV],
  module: {
    loaders: [
      {
        include: [path.join(__dirname, '..', 'src')],
        loaders: ['react-hot-loader/webpack', 'ts'],
        test: /\.(tsx|ts|js)/,
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
      },
      {
        loader: 'json',
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
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
    root: [path.resolve('client')],
  },
};
