//获取应用实例
const app = getApp()

Page({
  data: {
    message_list: [
      {
        msg_type: "comment",
        msg_id: 11,
        author_avator_url: "../../assets/imgs/avator1.jpeg",
        author_nick: "一缕破伤风",
        author_id: "24",
        time: "1小时前",
        comment_id: 122,
        comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
        content_id: 1,
        content_review_pic_url: "../../assets/imgs/pic1.jpeg"
      },
      {
        msg_type: "like",
        msg_id: 12,
        author_avator_url: "../../assets/imgs/avator2.jpeg",
        author_nick: "一缕破伤风",
        author_id: "24",
        time: "1小时前",
        content_id: 1,
        content_review_pic_url: "../../assets/imgs/pic2.jpeg"
      },
      {
        msg_type: "comment",
        msg_id: 13,
        comment_id: 122,
        author_avator_url: "../../assets/imgs/avator1.jpeg",
        author_nick: "一缕破伤风",
        author_id: "24",
        time: "1小时前",
        comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
        content_id: 1,
        content_review_pic_url: "../../assets/imgs/pic1.jpeg"
      },
      {
        msg_type: "like",
        msg_id: 14,
        author_avator_url: "../../assets/imgs/avator2.jpeg",
        author_nick: "一缕破伤风",
        author_id: "24",
        time: "1小时前",
        content_id: 1,
        content_review_pic_url: "../../assets/imgs/pic2.jpeg"
      }
    ]
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
    
  }
})