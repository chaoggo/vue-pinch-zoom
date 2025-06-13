import PinchZoom from './src/index.vue'

/* istanbul ignore next */
PinchZoom.install = function (Vue) {
  Vue.component(PinchZoom.name, PinchZoom)
}

export default PinchZoom