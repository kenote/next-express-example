// next.config.js
const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const tsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const nextConfig = {
  distDir: '../.next',
  optimizeImages: false,
  webpack(config, { isServer }) {
    config.resolve.plugins = [
      new tsconfigPathsWebpackPlugin({
        configFile: './client/tsconfig.json'
      })
    ]
    config.plugins.push(new AntdDayjsWebpackPlugin())
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  }
}

module.exports = withPlugins([
  optimizedImages,
  withCss,
  withSass
], nextConfig)