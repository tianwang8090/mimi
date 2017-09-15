//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      avator_url: "../../assets/imgs/avator1.jpeg",
      nick: "一缕破伤风"
    },
    showInput: false
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    
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
  tapInputHandle() {}
})