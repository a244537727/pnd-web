import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 侧边栏样式
    asideStatus: 'inline-block',
    // 文件上传窗口状态 打开:open 关闭:close 折叠:collapse
    fileUploadComponentStatus: 'close',
    fileUploadList: [],
    levelList: [],
    fileTreeDialogVisible: false,
    fileTreeInfo: {
      title: '设置'
    },
    flushFileListEvent: 0
  },
  mutations: {
    toggleAside(state) {
      state.asideStatus = state.asideStatus === 'inline-block'? 'none': 'inline-block'
    },
    operationFileUploadWindow (state, status) {
      state.fileUploadComponentStatus = status
    },
    addUploadFile (state, fileUploadInfo) {
      //fileUploadInfo格式 {targetFolderId: x, targetFolderName: x, file: jsFileObject} jsFileObject {name: 'xx', size: 'xx'}
      state.fileUploadList.push(fileUploadInfo)
    },
    clearFileUploadList(state){
      state.fileUploadList = []
    },
    pushLevelList (state, val){
      state.levelList.push(val)
    },
    spliceLevelList(state, index){
      state.levelList.splice(index + 1, state.levelList.length - index)
    },
    openFileTreeDialog(state, info){
      state.fileTreeDialogVisible = true
      state.fileTreeInfo = info
    },
    closeFileTreeDialog (state){
      state.fileTreeDialogVisible = false
    },
    flushFileListEvent (state){
      state.flushFileListEvent++
    }
  },
  actions: {

  }
})
