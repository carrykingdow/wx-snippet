import {contacts} from './data/contact'

Page({
  data: {
    contacts,
    contact: contacts[0],
    transformIdx: 0,
    position: 'center',
    duration: 300,
    show: false,
    overlay: false
  },

  showNext(e) {
    const idx = e.currentTarget.dataset.idx
    this.setData({
      show: true,
      contact: contacts[idx],
      transformIdx: idx
    })
  },

  showPrev() {
    this.setData({
      show: false
    })
  },

  onBeforeEnter(res) {
    console.log(res)
  },
  onEnter(res) {
    console.log(res)
  },
  onAfterEnter(res) {
    console.log(res)
  },
  onBeforeLeave(res) {
    console.log(res)
  },
  onLeave(res) {
    console.log(res)
  },
  onAfterLeave(res) {
    console.log(res)
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

  onShareAppMessage() {
    return {
      title: 'share-element',
      path: 'subPages/pages/share-element/index'
    }
  },
})