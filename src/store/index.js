import Vue from 'vue'
import Vuex from 'vuex'
import * as Experience from './experience'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    experience: Experience
  },
  state: {
    title: 'Matthew Harmon'
  },
  getters: {
    title (state) {
      return state.title
    }
  },
  mutations: {
    setTitle (state, title) {
      state.title = `Matthew Harmon - ${title}`
    }
  },
  actions: {
    setTitle ({ commit }, title) {
      commit('setTitle', title)
    }
  }
})
