const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');


const projectRoot = path.resolve(__dirname, '..');

module.exports = {

  mode: 'development',

  context: projectRoot,

  entry:  [
      './src/',
      './templates/components/'
    ],
  output: {
    filename: '[name].js',
    path: path.resolve(projectRoot, 'dist'),
  },

  resolve: {
    alias: {
      styles: path.resolve(projectRoot, 'src/styles'),
      variables: path.resolve(projectRoot, 'src/styles/global/_variables.scss'),
      mixins: path.resolve(projectRoot, 'src/styles/global/_mixins.scss'),
      functions: path.resolve(projectRoot, 'src/styles/global/_functions.scss'),
      utility: path.resolve(projectRoot, 'src/styles/global/_utility.scss')
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true,
              plugins: config => [autoprefixer],
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /fonts\/.*\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {name: '/fonts/[name].[ext]'},
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'file-loader', options: {name: '/images/[name].[ext]'}},
          {loader: 'img-loader'},
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new WebpackNotifierPlugin({
      title: 'Theme',
      alwaysNotify: true,
    }),
    //new SassLintPlugin(),
    new SVGSpritemapPlugin(
      'src/images/**/*.svg',
      {
        output: {
          filename: '/images/svg/main.svg',
        },
        sprite: {
          prefix: 'u-icon-',
        }
      }
    ),
  ]
};
