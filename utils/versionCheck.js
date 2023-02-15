const versionCheckHandler = () => {
  const updateManager = wx.getUpdateManager()
  if (!updateManager) return
  updateManager.onCheckForUpdate(res => {
    // 请求完新版本信息的回调
    // console.log('小程序更新自检===>', res.hasUpdate ? '需要更新' : '无需更新')
  })
  updateManager.onUpdateReady(() => {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      }
    })
  })
  updateManager.onUpdateFailed(() => {
    // 新的版本下载失败
    console.log('新的版本下载失败')
  })
}

export {
  versionCheckHandler
}
