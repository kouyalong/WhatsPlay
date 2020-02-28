// pages/news/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.loadMovieNews()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
  * 加载 
  */
  loadMovieNews: function () {
    var that = this
    var utilObj = require("../../utils/util.js")
    var city = "北京"
    var newsPage = 1
    var newsType = "movie"
    utilObj.loadNews(newsType, newsPage, city, that)
  },

  onTapNews: function (event){

    var that = this
    var utilObj = require("../../utils/util.js")
    utilObj.loadNewsDetail(event.currentTarget.dataset.newsGID, event.currentTarget.dataset.newsGRC, that)
  }
})