import Stack from '../mwx/stack'
import Login from './index'

export default {
  /**
   * service 数据返回响应处理 是否登陆过期
   * @param {any} res
   */
  async serveReact(res, cb) {
    const vm = Stack.page()
    const data = res.data
    if (typeof res !== 'object') {
      cb()
    }
    if (data.Code === -2000) {
      vm.wetoast.toast()
      vm.setData({
        error: true,
        errorMsg: vm.data.LANG.LoginRefresh,
        emptyImg: vm.data.emptyImg,
      })
      await Login.auth()
      cb()
    } else {
      cb()
    }
  },
}