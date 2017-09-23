//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: null,
    showInput: false,
    focus: true
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  nickHandle(e) {
    this.setData({
      showInput: true
    });
  },
  inputDoneHandle(e) {
    let s1 = 'userInfo.nick';
    // 这里需要实现trim
    let obj = {
      showInput: false
    };
    obj[s1] = e.detail.value || this.data.userInfo.nick;

    console.log(e)
    this.setData(obj);

  },
  inputCancelHandle(e) {
    this.setData({
      showInput: false
    });
  },
  tapInputHandle() { },
  // 点击头像
  avatorTapHandle(e) {
    wx.chooseImage({
      count: 1,	// 默认为9
      sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
      sourceType: ['album', 'camera'],	// 指定图片来源
      success: res  => {
        let tempFilePaths = res.tempFilePaths;
        let obj = {}, s = 'userInfo.avator_url';
        obj[s] = tempFilePaths[0];
        this.setData(obj);
      }
    })
  },
  // 建议
  suggestTapHandle(e) {
    wx.navigateTo({
      url: '../suggestion/suggestion'
    })
  },
  // 关于我们
  aboutTapHandle(e) {
    wx.navigateTo({
      url: '../about/about'
    })
  }
})