Page({
  data: {
    content_id: null,
    from: "home",
    content_info: {
      content_id: 122,
      author_avator_url: "../../assets/imgs/avator1.jpeg",
      author_nick: "一缕破伤风",
      time: "1小时前",
      content_img: "../../assets/imgs/pic1.jpeg",
      content_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。如果你无法简洁的表达你的想法，那只说明你还不够了解他。",
      like: false,
      like_count: 520,
      comment_count: 77
    },
    comment_list: [
      {
        comment_id: 122,
        author_avator_url: "../../assets/imgs/avator1.jpeg",
        author_nick: "一缕破伤风",
        commented_nick: "",
        time: "1小时前",
        comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
      },{
        comment_id: 122,
        author_avator_url: "../../assets/imgs/avator1.jpeg",
        author_nick: "一缕破伤风",
        commented_nick: "someBody",
        time: "1小时前",
        comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
      },{
        comment_id: 122,
        author_avator_url: "../../assets/imgs/avator1.jpeg",
        author_nick: "一缕破伤风",
        commented_nick: "",
        time: "1小时前",
        comment_txt: "如果你无法简洁的表达你的想法，那只说明你还不够了解他。"
      }
    ]
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    this.data.content_id = options.content_id;
    this.data.from = options.from;
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