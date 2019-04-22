import TerserPlugin from 'terser-webpack-plugin'

export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: 'production',

    minimize: false,
    minimizer: [new TerserPlugin()],

    noEmitOnErrors: true,

    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,

    occurrenceOrder: true,
    concatenateModules: true,
    providedExports: true,

    usedExports: true,
    sideEffects: true,

    namedModules: false,

    moduleIds: false,

    namedChunks: true,
    chunkIds: false,

    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true
  }
})
