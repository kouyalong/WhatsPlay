const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function loadNews(newsType, newsPage, city, that) {
  var timestamp = Date.parse(new Date())
  var app = getApp()

  timestamp = timestamp / 1000
  wx.request({
    url: app.globalData.feedUrl,
    data: {
      category: newsType,
      city: city,
      loc_time: timestamp
    },
    method: "GET",
    success: function (res) {
      console.info(res.data)
      that.setData({
        news: res.data.data
      })
    }
  })
}

function loadNewsDetail(groupId, sourceId, that) {
  var timestamp = Date.parse(new Date())
  var app = getApp()
  timestamp = timestamp / 1000
  console.info(app.globalData.articleUrl % (groupId, sourceId))
  wx.request({
    url: app.globalData.articleUrl % (groupId, sourceId),
    data: app.globalData.defaultQuery,
    method: "GET",
    success: function (res) {
      that.setData({
        newsDetail: res.data.data
      }
      )
    }
  })
}

module.exports = {
  formatTime: formatTime,
  loadNews: loadNews,
  loadNewsDetail: loadNewsDetail
}