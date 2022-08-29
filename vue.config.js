const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

const path = require('path');

module.exports = {

  configureWebpack: {

    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}