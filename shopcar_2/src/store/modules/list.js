
export default {
  namespaced: true,
  state () {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false
        }
      ],
      isTure: false
    }
  },
  getters: {
    isAll (state) {
      state.isTure = state.goodList.every(item => item.checked)
    }

  },
  mutations: {
    change (state, index) {
      // console.log(state, index)
      state.goodList[index].checked = !state.goodList[index].checked
      // console.log()
    },
    del (state, index) {
      state.goodList.splice(index, 1)
    },
    subn (state, payload) {
      if (state.goodList[payload.index].num === 1 && payload.num === -1) return
      state.goodList[payload.index].num += payload.num
    },
    isTrue (state) {
      state.isTure = !state.isTure
      state.goodList.forEach(item => {
        item.checked = state.isTure
      })
    }
  },
  actions: {
    changen (context, index) {
      // console.log(index)
      context.commit('change', index)
    },
    delfn (context, index) {
      context.commit('del', index)
    },
    sub (context, payload) {
      // console.log(payload)
      context.commit('subn', payload)
    },
    changeTrue (context) {
      // console.log('1')
      context.commit('isTrue')
    }
  }
}
