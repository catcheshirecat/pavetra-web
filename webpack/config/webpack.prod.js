import merge from 'webpack-merge'

import getCommonConfig from './webpack.common'

import * as modules from '../modules'

export default () => merge(
  getCommonConfig(),
  {
    mode: 'none',
    devtool: false
  },
  modules.cleanDirectories(),
  modules.connectBuildProgressIndicator(),
  modules.loadProdCss(),
  modules.optimizeBuild()
)
