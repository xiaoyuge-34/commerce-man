// 插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  axios.defaults.baseURL = 'http://39.108.193.251:8811/api/private/v1/'
  // 添加实例方法
  Vue.prototype.$http = axios
}

export default MyHttpServer
