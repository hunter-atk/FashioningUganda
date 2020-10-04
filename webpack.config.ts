import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as WebappWebpackPlugin from 'webapp-webpack-plugin';

const title = `Fashioning Uganda`;
const description = `20 years of style in Uganda's pearl.`;
const image = 'src/assets/icons/uganda.png';
module.exports = async () => {

  return {
    mode: 'development',
    entry: './src/Main.tsx',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    devServer: {
      contentBase: `./dist`,
      historyApiFallback: true,
      port: 8080
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
        { from: 'index.html', to: 'index.html' }
      ]),
      new HtmlWebpackPlugin({
        meta: {
          description,
          'og:title': title,
          'og:site_name': title,
          'og:description': description,
          'og:image': image,
          'og:image:secure_image': image,
          'og:url': 'https://fashioninguganda.com',
          'twitter:card': 'summary_large_image',
          'twitter:image': image,
          'og:type': 'website',
          viewport: 'width=device-width, initial-scale=1.0'
        },
        template: './index.html',
        title: `fashioning-uganda`
      }),
      new WebappWebpackPlugin('./src/assets/icons/uganda.png')
    ],
    module: {
      rules: [
        { test: /\.sass$/, loader: 'style-loader' },
        {
          test: /\.sass$/,
          loader: 'typings-for-css-modules-loader',
          options: {
            modules: true,
            namedExport: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
            sass: true,
            url: false
          }
        },
        { test: /\.sass$/, loader: 'sass-loader' },
        { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        { test: /\.(png|jpeg|jpg|pdf|svg)$/, loader: 'file-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
      ]
    }
  };
};