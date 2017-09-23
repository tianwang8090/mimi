const common = require("./../../common/common.js")

Page({
  data: {
    content_id: null,
    from: "home",
    activeTab: "comment",
    content_info: {
      content_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      author_id: "22",
      gender: "female",
      time: "1小时前",
      content_img: "../../assets/imgs/pic1.jpeg",
      content_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
      like: false,
      like_count: 520,
      comment_count: 77
    },
    comment_list: [{
      comment_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      author_id: "23",
      gender: "male",
      commented_nick: "",
      time: "1小时前",
      comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
    }, {
      comment_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      author_id: "24",
      gender: "female",
      commented_nick: "someBody",
      time: "1小时前",
      comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
    }, {
      comment_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      author_id: "25",
      gender: "",
      commented_nick: "",
      time: "1小时前",
      comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
    }],
    like_list: [
      {
        user_id: 1,
        user_avator_url: "../../assets/imgs/avator1.jpeg",
        user_nick: "末日小丑",
        like_time: "5分钟前"
      },
      {
        user_id: 2,
        user_avator_url: "../../assets/imgs/avator2.jpeg",
        user_nick: "末日小丑",
        like_time: "5分钟前"
      },
      {
        user_id: 3,
        user_avator_url: "../../assets/imgs/avator1.jpeg",
        user_nick: "末日小丑",
        like_time: "5分钟前"
      }
    ],
    inputFocus: false
  },
  onLoad: function (options) {
    //Do some initialize when page load.
    this.data.content_id = options.content_id;
    this.data.from = options.from;
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
  /**
   * 点赞
   * @param {*} e 
   */
  likeHandle(e) {
    let params = {};
    let s1 = `content_info.like`;
    let s2 = `content_info.like_count`;
    params[s1] = !this.data.content_info.like;
    params[s2] = this.data.content_info.like ? --this.data.content_info.like_count : ++this.data.content_info.like_count;
    this.setData(params);
  },
  /**
   * 点击评论回复
   * @param {*} e 
   */
  commentTapHandle(e) { },
  moreHandle(e) {
    console.log(e)
    common.report(e.target.dataset);
  },
  /**
   * tab标签栏点击切换
   * @param {*} e
   */
  tabHandle(e) {
    let name = e.currentTarget.dataset.name;
    this.setData({
      activeTab: name
    });
  },
  /**
   * 点击输入框
   * @param {*} e 
   */
  tapInputHandle(e) {},
  focusHandle(e) {
    this.setData({
      inputFocus: true
    });
  },
  blurHandle(e) {
    this.setData({
      inputFocus: false
    });
  }
})