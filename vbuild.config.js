const path = require('path')

module.exports = options => ({
  entry: 'src/index.js',
  dist: 'app/dist',
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  babel: {
    presets: ["vue-app"],
    plugins: ["transform-decorators-legacy", "transform-class-properties"]
  },
  env: {
    APP_MODULES: path.resolve('./app/node_modules')
  },
  // resource in electron app must be loaded from relative path in production mode
  homepage: './',
  webpack(config) {
    config.target = 'electron-renderer'
    // exclude dependencies in app folder from bundling
    const appDeps = require('./app/package').dependencies || {}
    config.externals = Object.keys(appDeps).map((curr, name) => {
      curr[name] = `commonjs ${name}`
      return curr
    }, {})

    return config
  }
})
