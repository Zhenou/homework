import router from '@/router/index'
export default {
  namespaced: true,
  state: {
    defaultActiveLeft: '/dashboard',
    defaultActiveTop: '/dashboard',
    editableTabs: [
      {
        title: '工作台',
        name: '/dashboard',
        id: '1'
      }
    ]
  },
  mutations: {
    addTab (state, payload) { // 顶部新增一级
      if (state.editableTabs.every((item) => item.name !== payload.path)) {
        state.editableTabs.push({
          title: payload.meta.title,
          name: payload.path,
          id: payload.meta.id
        })
      }
      state.defaultActiveTop = payload.path
      state.defaultActiveLeft = payload.path
    },
    addTabSecond (state, payload) { // 顶部新增二级
      if (state.editableTabs.every((item) => item.id !== payload.id)) {
        state.editableTabs.push({
          title: payload.title,
          name: payload.name,
          path: payload.path,
          id: payload.id
        })
      }
      state.defaultActiveTop = payload.name
      state.defaultActiveLeft = payload.path
    },
    clickChangNav (state, payload) { // 跳转
      const item = state.editableTabs.find(item => item.name === payload)
      state.defaultActiveTop = item.name
      state.defaultActiveLeft = item.path || item.name
      router.push(item.name || item.path).catch((err) => err)
    },
    removeTab (state, payload) {
      const tabs = state.editableTabs
      let activeName = state.defaultActiveTop
      if (activeName === payload) { // 删除选中
        tabs.forEach((tab, index) => {
          if (tab.name === payload) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab.path) {
              activeName = nextTab
              state.defaultActiveTop = activeName.name
              state.defaultActiveLeft = activeName.path
              router.push(activeName.name).catch((err) => err)
              // state.editableTabs = tabs.filter((tab) => tab.name !== payload)
            } else if (nextTab) {
              activeName = nextTab.name
              state.defaultActiveTop = activeName
              state.defaultActiveLeft = activeName
              router.push(activeName).catch((err) => err)
            }
            state.editableTabs = tabs.filter((tab) => tab.name !== payload)
          }
        })
      } else { // 删除未选中
        const tabs = state.editableTabs
        let Tab = {}
        tabs.forEach((item, index) => {
          if (item.name === activeName) {
            Tab = state.editableTabs[index]
          }
        })
        if (Tab.path) {
          state.defaultActiveTop = Tab.name
          state.defaultActiveLeft = Tab.path
          router.push(Tab.name).catch((err) => err)
          // state.editableTabs = tabs.filter((tab) => tab.name !== payload)
        } else {
          state.defaultActiveTop = activeName
          state.defaultActiveLeft = activeName
          router.push(activeName).catch((err) => err)
        }
        state.editableTabs = tabs.filter((tab) => tab.name !== payload)
      }
    },
    onlyDelete (state, payload) {
      state.editableTabs = state.editableTabs.filter((tab) => tab.name !== payload)
    }
  }
}
