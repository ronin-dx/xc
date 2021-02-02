const baseUrl = "http://192.168.1.15:3000/api/wechat/"
var request = function (url, method, data = {}) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'contentType': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success(res) {
        if (res.statusCode == 200) {
          resolve(res.data)
        }
      },
      fail(err) {
        reject(err);
        wx.showToast({
          title: '服务错误,退出小程序稍后重试!',
          icon: 'none',
          duration: 2000,
          mask: true
        })
      }
    })
  })
  return promise
}

module.exports = {
  request
}