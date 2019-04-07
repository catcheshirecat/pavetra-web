import merge from 'webpack-merge'

import { SOURCE, BUILD } from '../constants'

import * as modules from '../modules'

export default () => {
  const { NODE_ENV } = process.env
  const DEV = NODE_ENV === 'development'

  return merge(
    {
      entry: [SOURCE],
      output: {
        path: BUILD,
        filename: DEV ? 'js/[name].js' : 'js/[name].[contenthash:5].js',
        chunkFilename: DEV
          ? 'js/[name].js'
          : 'js/[name].[contenthash:5].js',
        publicPath: '/',
      },
    },
    modules.setupHtml(),
    modules.loadJavaScript(),
    modules.loadSvg(),
    modules.defineEnvVariables({
      __ENV__: JSON.stringify(NODE_ENV),
      __DEV__: NODE_ENV === 'development',
      __PROD__: NODE_ENV === 'production'
    }),
  )
}
