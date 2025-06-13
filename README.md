# ui for Vue

// 先安装
npm i @wocwin/t-ui
// 1、 在main.js中按下引入(全局使用)
import Tui from '@wocwin/t-ui'
Vue.use(Tui)
// 2、按需引入，在单个vue文件如下引入，在注册；或者在main.js中如下引入在注册，皆可！
import { TTable, TLayoutPage, TLayoutPageItem, TForm, TQueryCondition } from '@wocwin/t-ui'
