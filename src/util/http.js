import { Promise } from '../libs/es6-promise'
import STORAGE from '../mwx/storage'
import LoginServe from '../login/serve'
import LANG from '../lang/lang'
// stack
import Status from '../set/status'
import Print from '../util/print'


const REQ_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const HEADER = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ',
}

const HEADERFile = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'multipart/form-data',
  'Authorization': 'Bearer ',
}


export default {
  /**
   * 发起 POST 请求
   * @param {any} url
   * @param {any} [data={}]
   * @returns
   */
  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      const key = wx.getStorageSync(STORAGE.userKey)

      // let key = "123"
      if (!key) {
        const obj = {
          Success: false,
          Code: -9999,
          Message: LANG.LoginKeyNotFind,
        }
        resolve(obj)
        return
      }

      HEADER.Authorization = `Bearer ${key}`

      wx.request({
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.POST,
        success(res) {
          const resData = res.data
          LoginServe.serveReact(() => {
            resolve(resData)
          })
        },
        fail: (err) => {
          Print.Log('请求失败')
          Status.notfind(true, err)
          reject(err)
        },
      })
    })
  },
  /**
   * 发起GET请求
   * @param {any} url
   * @param {any} data
   * @returns
   */
  get(url, data = {}) {
    return new Promise((resolve) => {
      const key = wx.getStorageSync(STORAGE.userKey)

      // let key = "123"
      if (!key) {
        const obj = {
          Success: false,
          Code: -9999,
          Message: LANG.LoginKeyNotFind,
        }
        resolve(obj)
        return
      }

      HEADER.Authorization = `Bearer ${key}`

      wx.request({
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.GET,
        success(res) {
          resolve(res.data)
        },
        fail: (err) => {
          Print.Error('报错了')
          Status.notfind(true, err)
          resolve(false)
        },
      })
    })
  },
  file(url, filePath) {
    return new Promise((resolve) => {
      const key = wx.getStorageSync(STORAGE.userKey)

      HEADERFile.Authorization = `Bearer ${key}`

      wx.uploadFile({
        url,
        filePath,
        header: HEADERFile,
        name: 'image',
        formData: {
          'user': 'test',
        },
        success(res) {
          const data = res.data
          Print.Log(data)
          resolve(data)
        },
      })
    })
  },
}