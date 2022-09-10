const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

const path = require('path');

module.exports = {
  publicPath: '/plz_search',
  outputDir: 'docs',
  configureWebpack: {

    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}