// login 层
import {
  Promise,
} from '../libs/es6-promise'
import Config from '../config'
// stroage
import Storage from '../mwx/storage'
import WxLogin from '../mwx/login'
import Print from '../util/print'

export default {
  /**
   * AU微信用户一站式登陆
   * @returns
   */
  auth() {
    return new Promise((resolve) => {
      const wxUserInfo = WxLogin.wxLoginGetUserInfo()

      wxUserInfo.then((resp) => {
        wx.request({
          url: `${Config.ApiHost}api/wx/login`,
          method: 'POST',
          data: {
            code: resp.code,
            iv: resp.iv,
            encryptedData: resp.encryptedData,
          },
          header: {
            'content-type': 'application/json',
          },
          success(res) {
            Print.Log(res.data)
            const nowTime = new Date().getTime()

            Storage.set(Storage.userKey, res.data.token)
            Storage.set(Storage.userkeyTime, nowTime)

            resolve(res)
          },
          fail(err) {
            Print.Error(err)
            resolve(false)
          },
        })

        Print.Log(resp)
      })

      wxUserInfo.catch((err) => {
        Print.Error('err 拒绝了授权')
        Print.Error(err)
        resolve(false)
      })
    })
  },
}