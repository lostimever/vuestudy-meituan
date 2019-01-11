const state = () => ({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.setHotPlace = val
  }
}

const actions = {
  setMenu: ({ commit }, menu) => {
    commit('setMenu', menu)
  },
  setHotPlace: ({ commit }, setHotPlace) => {
    commit('setHotPlace', setHotPlace)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
