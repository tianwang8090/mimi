//获取应用实例
const app = getApp()

const common = require("./../../common/common.js")

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    contentList: [{
      content_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      time: "1小时前",
      content_img: "../../assets/imgs/pic1.jpeg",
      content_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
      like: false,
      like_count: 520,
      comment_count: 77
    }, {
      content_id: 123,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      time: "1小时前",
      content_img: "../../assets/imgs/pic2.jpeg",
      content_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
      like: true,
      like_count: 521,
      comment_count: 77
    }]
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh: function () {
    // 下拉刷新
    console.log("ddd");
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onReachBottom() {
    // 上拉加载
    wx.request({
      url: '',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  likeHandle(e) {
    // 点赞处理
    let dataset = e.currentTarget.dataset;
    let params = {};
    let s1 = `contentList[${dataset.index}].like`;
    let s2 = `contentList[${dataset.index}].like_count`;
    params[s1] = !dataset.like;
    params[s2] = dataset.like ? --this.data.contentList[dataset.index].like_count : ++this.data.contentList[dataset.index].like_count;
    this.setData(params);
  },
  commentHandle(e) {
    // 点评论处理
    let dataset = e.currentTarget.dataset,
      _data = this.data.contentList;
    wx.navigateTo({
      url: `../content/content?content_id=${_data[dataset.index].content_id}&from=home`
    })
  },
  moreHandle(e) {
    // 点更多处理
    console.log(e)
    common.report(e.target.dataset);
  }
})