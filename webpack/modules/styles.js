// Core
import merge from 'webpack-merge'
import env from 'postcss-preset-env'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nested from 'postcss-nested'
import cssnano from 'cssnano'

import { SOURCE } from '../constants'

const LEAFLET_PATH = /(leaflet|mapbox\-gl)\.css$/
const THEME_PATH = `${SOURCE}/theme`

const loadLeafletCss = () => ({
  module: {
    rules: [
      {
        test: LEAFLET_PATH,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
})

const loadThemeCss = ({ sourceMap = false, minimize = false } = { sourceMap: false, minimize: false }) => ({
  module: {
    rules: [
      {
        test: THEME_PATH,
        use: [
          'style-loader',
          'css-loader',
          loadPostCss({ sourceMap, minimize })
        ]
      }
    ]
  }
})

const loadModulesCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[path][name]__[local]--[hash:base64:5]',
    sourceMap
  }
})

const loadPostCss = ({ sourceMap = false, minimize = false } = { sourceMap: false, minimize: false }) => {
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

export const loadDevCss = () => merge(
  loadLeafletCss(),
  loadThemeCss({ sourceMap: true, minimize: false }),
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: [LEAFLET_PATH, THEME_PATH],
          use: [
            'style-loader',
            loadModulesCss({ sourceMap: true }),
            loadPostCss({ sourceMap: true, minimize: false })
          ]
        }
      ]
    }
  }
)

export const loadProdCss = () => merge(
  loadLeafletCss(),
  loadThemeCss({ sourceMap: false, minimize: true }),
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: [LEAFLET_PATH, THEME_PATH],
          use: [
            MiniCssExtractPlugin.loader,
            loadModulesCss({ sourceMap: false }),
            loadPostCss({ sourceMap: false, minimize: true })
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
  }
)
