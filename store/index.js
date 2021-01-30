import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      welcomingActive: true,
    },
    mutations: {
      deactivateWelcoming(state) {
        state.welcomingActive = false
      },
    },
    actions: {
      deactivateWelcoming(context) {
        context.commit('deactivateWelcoming')
      },
      nuxtServerInit(vuexContext, context) {},
    },
  })
}

export default createStore
