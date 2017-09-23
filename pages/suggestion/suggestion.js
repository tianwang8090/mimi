Page({
  data: {
    value: "",
    canSend: false,
    placeholder: "请在这里写下您的建议..."
  },
  onLoad: function (options) {
    //Do some initialize when page load.

  },
  onReady: function () {
    //Do some when page ready.

  },
  onShow: function () {
    //Do some when page show.

  },
  onHide: function () {
    //Do some when page hide.

  },
  onUnload: function () {
    //Do some when page unload.

  },
  onPullDownRefresh: function () {
    //Do some when page pull down.

  },
  // 输入建议时设置发送按钮状态
  textareaInputHandle(e) {
    this.setData({
      canSend: e.detail.value.length > 0
    });
  },
  // 发送建议
  sendTapHandle(e) {
    if (!this.data.canSend) return;
    wx.showModal({
      title: '发送成功',
      content: '感谢，我们会十分认真的考虑您对MiMi的建议，谢谢！',
      showCancel: false
    })
  }
})