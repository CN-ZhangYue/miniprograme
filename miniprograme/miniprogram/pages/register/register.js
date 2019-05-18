// miniprogram/pages/register/register.js
const app = getApp()

//获取数据库引用

let name = null;
let phone = null;
let school = null;
let number = null;
let enterYear = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  inputName(event){
    name = event.detail.value;
  }, 
  inputSchool(event) {
    school = event.detail.value;
  }, 
  inputNumber(event) {
    number = event.detail.value;
  }, 
  inputPhone(event) {
    phone = event.detail.value;
  }, 
  inputEnterYear(event) {
    enterYear = event.detail.value;
  }, 
  saveuserinfo() {
    let that = this;
    userListDB.doc('_openid').set({
      data: {
        name: name,
        password: password,
        phone: phone,
        address: address
      }
    }).then(res => {
      app.showTips('注册成功');
    }) 
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

  registerForm: function () {
    wx.cloud.callFunction({
      name: 'register',
      data: {
        name: name,
        phone: phone,
        school: school,
        number: number,
        enterYear: enterYear
      },
      success: function (res) {
        console.log('success')
      },
      fail: function (res) {
        console.error
      }
    })
  }
})