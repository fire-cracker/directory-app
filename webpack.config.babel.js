import webpack from 'webpack'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const mode = process.env.NODE_ENV || 'development'

export default {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', 'gif']
  },
  plugins: [new webpack.EnvironmentPlugin(['API_URL'])],
  devtool:
    mode === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  node: {
    fs: 'empty'
  }
}
