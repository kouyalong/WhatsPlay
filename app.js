//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    feedUrl: "https://is.snssdk.com/api/news/feed/v2/?",
    articleUrl: "https://a3.pstatp.com/article/content/21/1/%d/%d/1/0/?",
    defaultQuery: {
      iid: 37457543399,
      device_id: 55215909025,
      ac: "wifi",
      channel: "tengxun2",
      aid: 13,
      app_name: "news_article",
      version_code: 682,
      version_name: "6.8.2",
      device_platform: "android"
    }
  }
})