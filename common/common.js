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

/**
 * 全局举报方法
 */
const reportToManager = (data) => {
  wx.showActionSheet({
    itemList: ["色情", "暴力", "政治敏感", "其他"],
    success: function (res) {
      /* wx.request({
        url: '/',
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          
        }
      }) */
      if (!res.cancel) {
        wx.showModal({
          title: '举报成功',
          content: "感谢您为我们社区和谐提供帮助，我们会尽快处理！",
          showCancel: false
        })
        console.log("data", data);
      }
    }
  })
}

module.exports = {
  formatTime,
  report: reportToManager
}