module.exports = api => {
  const env = api.env()

  api.cache.never()

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/syntax-dynamic-import'
  ]

  if (env === 'development') {
    plugins.push('react-hot-loader/babel')
  }

  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          debug: false,
          useBuiltIns: 'usage',
          corejs: 3,
          spec: true,
          loose: false,
          modules: false
        }
      ]
    ],
    plugins
  }
}
