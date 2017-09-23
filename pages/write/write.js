Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    contentImgSrc: "",
    share: true,
    textareaOptions: {
      autofocus: false,
      focus: false,
      placeholder: "写下你的MiMi..."
    },
    weatherArray: ["晴天", "阴", "小雨", "大雨", "微风", "雪", "雾", "霾", "龙卷风", "沙尘暴"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 点击输入框容器也能focus
   */
  textareaWrapTapHandle() {
    let obj = {},
      s = "textareaOptions.focus";
    obj[s] = true;
    this.setData(obj);
  },
  /**
   * 添加图片
   */
  chooseImgHandle(e) {
    let _this = this;
    wx.chooseImage({
      count: 1, // 默认为9
      sizeType: ['original', 'compressed'], // 指定原图或者压缩图
      sourceType: ['album', 'camera'], // 指定图片来源
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        _this.setData({
          contentImgSrc: tempFilePaths[0]
        });
      }
    })
  },
  /**
   * 日期改变
   */
  dateChangeHandle(e) {},
  /**
   * 天气改变
   */
  weatherChangeHandle(e) {

  },
  /**
   * 点击分享
   */
  shareHandle(e) {},
  /**
   * 编辑完成
   */
  doneHandle(e) {
    wx.navigateBack();
  },
  /**
   * textarea确认按钮
   */
  textareaConfirmHandle(e) {}
})