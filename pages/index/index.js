import { wxComponents } from "./data"
const app = getApp()
Page({
  data: {
    wxComponents,
    hidden: true,
    searchVal: ''
  },
  onLoad() {},
  onSearchInput(e){
    console.log(e);
    const { value } = e.detail
    this.setData({searchVal: value })
  },
  search(e){
      const { searchVal } = this.data
      wxComponents.forEach(item , index=>{
        let targetIndex = item.findIndex(subItem => subItem.name.includes(searchVal))
      })
  },
  navigateHandler(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id],
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur,
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20)
      this.setData({
        listCur: that.data.list[num],
      })
    }
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false,
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur,
    })
  },
  indexSelect(e) {
    let that = this
    let barHeight = this.data.barHeight
    let list = this.data.list
    let scrollY = Math.ceil((list.length * e.detail.y) / barHeight)
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20,
        })
        return false
      }
    }
  },
})
