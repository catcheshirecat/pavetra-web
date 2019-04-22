import { DefinePlugin } from 'webpack'
import WebpackBar from 'webpackbar'
import CleanWebpackPlugin from 'clean-webpack-plugin'

import { PROJECT_ROOT } from '../constants'

export const defineEnvVariables = (variables = {}) => ({
  plugins: [new DefinePlugin(variables)],
})

export const connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()]
})

export const cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      root: PROJECT_ROOT
    })
  ]
})
