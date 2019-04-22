// Core
import env from 'postcss-preset-env'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nested from 'postcss-nested'
import cssnano from 'cssnano'

const loadPostCss = (
  { sourceMap = false, minimize = false } = {
    sourceMap: false,
    minimize: false
  }
) => {
  const plugins = [
    env({ stage: 1 }),
    nested()
  ]

  if (minimize) {
    plugins.push(cssnano)
  }

  return {
    loader: 'postcss-loader',
    options: {
      plugins,
      sourceMap
    }
  }
}

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[path][name]__[local]--[hash:base64:5]',
    sourceMap
  }
})

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          loadCss({ sourceMap: true }),
          loadPostCss({ sourceMap: true, minimize: false })
        ]
      }
    ]
  }
})

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: false }),
          loadPostCss({ sourceMap: false, minify: true })
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].[id].css',
      chunkFilename: 'css/[name].[contenthash:5].[id].css'
    })
  ]
})
