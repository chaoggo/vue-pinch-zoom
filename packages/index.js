import CPinchZoom from './PinchZoom'
import { version } from '../package.json'
// 存储组件列表
const components = [
  CPinchZoom,
]

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 按需引入
export {
  CPinchZoom,
}
export default {
  version,
  ...components,
  install
}