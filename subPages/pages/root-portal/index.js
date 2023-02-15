const app = getApp()

Page({
  data: {
    items: [{}],
    show: false,
  },
  onShareAppMessage() {
    return {
      title: 'root-portal',
      path: 'subPages/pages/root-portal/index'
    }
  },
  onLoad() {
    console.log('onload')
    const items = []
    for (let i = 0; i < 200; i++) {
      const item = {}
      const r = Math.floor(255 * Math.random())
      const g = Math.floor(255 * Math.random())
      const b = Math.floor(255 * Math.random())
      item.bg = `background-color: rgb(${r}, ${g}, ${b})`
      items.push(item)
    }
    this.setData({items})
  },
  tap() {
    this.setData({show: true})
  }
})
