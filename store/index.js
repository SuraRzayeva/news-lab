import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  const API_KEY = '3568249ca16c4017860f0393fe35be1e'
  return new Vuex.Store({
    state: {
      welcomingActive: true,
      headlines: [],
      sport: [],
      business: [],
      countryIndex: 'us',
      sportChannel: 'bbc-sport',
      businessChannel: 'business-insider',
    },
    mutations: {
      deactivateWelcoming(state) {
        state.welcomingActive = false
      },
      changeCountryIndex(state, input) {
        state.countryIndex = input
        console.log(state.countryIndex)
      },
    },
    actions: {
      deactivateWelcoming(context) {
        context.commit('deactivateWelcoming')
      },
      changeCountryIndex(context, input) {
        context.commit('changeCountryIndex', input)
      },
      async nuxtServerInit(vuexContext, context) {
        let headlines
        let sport
        let business
        let entertainment
        let finance
        let art
        try {
          headlines = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?country=${vuexContext.state.countryIndex}&apiKey=${API_KEY}`
          )
          sport = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.sportChannel}&apiKey=${API_KEY}`
          )
          business = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.businessChannel}&apiKey=${API_KEY}`
          )
          vuexContext.state.sport = sport.data.articles
          vuexContext.state.headlines = headlines.data.articles
          vuexContext.state.business = business.data.articles
        } catch (e) {
          console.log(e)
        }
      },
    },
  })
}

export default createStore

//    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
