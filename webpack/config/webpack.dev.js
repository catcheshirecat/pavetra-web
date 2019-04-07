import { HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'

import getCommonConfig from './webpack.common'

import * as modules from '../modules'

export default () => (
  merge(
    getCommonConfig(),
    {
      entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
      plugins: [new HotModuleReplacementPlugin()],
      devServer: {
        open: true
      }
    },
    modules.loadDevCss()
  )
)