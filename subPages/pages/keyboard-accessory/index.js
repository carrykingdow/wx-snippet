const app = getApp()

Page({
  data: {
    height: 50,
    flex: 1,
    show: true,
  },
  onLoad: function () {
  },

  focus1() {
    console.log('focus input\n')
  },

  blur1() {
    console.log('blur input')
  },

  focus2() {
    console.log('focus textarea')
  },

  blur2() {
    console.log('blur textarea')
  },
})
