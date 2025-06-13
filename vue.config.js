const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: !isProduction,
  pages:{
    index:{
      entry:"examples/main.ts",
      template:"public/index.html",
      filename:'index.html'
    }
  },
  css: {
    extract: false
  },
  configureWebpack: config => {
    config.resolve.alias['@'] = resolve('examples')
    config.resolve.alias['components'] = resolve('examples/components')
    config.resolve.alias['~'] = resolve('packages')
    // 生产环境配置
    if (isProduction) {
      config.mode = 'production'
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  
};
