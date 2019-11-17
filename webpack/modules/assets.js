// Core
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pavetra',
      template: './static/template.html',
      // favicon: './static/favicon.ico',
    }),
  ],
})

export const loadImages = () => ({ // TODO do we need this?
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
})

export const loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: {
          test: /\.js$/
        },
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.css$/
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
})

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:5].[ext]',
            }
          }
        ]
      }
    ]
  }
})
