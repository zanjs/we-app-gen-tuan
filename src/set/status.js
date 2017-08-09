// stack
import Stack from '../mwx/stack'
import Lang from '../lang/lang'

export default {
  /**
   * 全局页面初始化状态
   */
  init() {
    const vm = Stack.page()
    vm.setData({
      error: false,
      errorMsg: Lang.ErrorMsg,
      loading: false,
      Lang,
    })
  },
  /**
   * 页面加载状态
   */
  loading() {
    const vm = Stack.page()
    vm.setData({
      loading: true,
    })
  },
  /**
   * 关闭 loading 加载状态
   */
  loadingClone() {
    const vm = Stack.page()
    vm.setData({
      loading: false,
    })
  },
  /**
   * 数据错误处理
   * @param {any} notfind
   * @param {string} [notfindMsg='没找到数据哎...']
   */
  notfind(notfind, notfindMsg = Lang.NotfindMsg) {
    const vm = Stack.page()
    vm.setData({
      notfind,
      notfindMsg,
    })
  },
  /**
   * 错误报告
   * @param {any} [msg=Lang.ErrorMsg]
   */
  error(msg = Lang.ErrorMsg) {
    const vm = Stack.page()
    vm.setData({
      error: true,
      errorMsg: msg,
    })
  },
}