import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index.jsx',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'reactMemoryGame',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'env', 'stage-2'],
        },
      },
      { test: /\.js$/, loader: 'babel-loader', include },
      { test: /\.json$/, loader: 'babel-loader', include },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
