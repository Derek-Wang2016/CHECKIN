//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: '我的第一个微信小程序',
    userInfo: {} ,
    datetoday: '',
    yeartarget: ['英语朗读30分钟','走步20000','英语朗读'],
    isPunch: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })

  },

  //事件处理函数
  onclockin: function() {
    this.setData({
      isPunch: !this.data.isPunch
    })

    wx.showToast({
    title: '打卡成功',
    icon: 'success',
    duration: 1000
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
 
    this.setData({
      datetoday:util.formatDate(new Date())
    })

    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
 
  }
})
