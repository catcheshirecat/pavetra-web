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
              name: './images/[name].[ext]'
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
              name: './images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
})
