import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  const API_KEY = '3568249ca16c4017860f0393fe35be1e'
  const API_COIN = '7ec1f61d0e756c3c3b3792692070d4c5'
  return new Vuex.Store({
    state: {
      welcomingActive: true,
      menuOpen: false,
      activePage: '',
      currencyRates: [],
      column1News: [],
      column2News: [],
      column3News: [],
      column4News: [],
      column5News: [],
      column6News: [],
      column7News: [],
      column1: 'cryptocurrency',
      column1Label: 'Keyword: Cryptocurrency',
      column2: 'bitcoin',
      column2Label: 'Keyword: Bitcoin',
      column3: 'crypto',
      column3Label: 'Keyword: Crypto',
      column4: 'altcoin',
      column4Label: 'Keyword: Altcoin',
      column5: 'blockchain',
      column5Label: 'Keyword: Blockchain',
      column6: 'defi',
      column6Label: 'Keyword: DeFi',
    },

    mutations: {
      deactivateWelcoming(state) {
        state.welcomingActive = false
      },
      toggleMenu(state) {
        state.menuOpen = !state.menuOpen
      },
      toggleActivePage(state, payload) {
        state.activePage = payload
      },
    },
    actions: {
      deactivateWelcoming(context) {
        context.commit('deactivateWelcoming')
      },

      async nuxtServerInit(vuexContext, context) {
        let column1Data
        let column2Data
        let column3Data
        let column4Data
        let column5Data
        let column6Data
        let currencyRates

        try {
          column1Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column1}&apiKey=${API_KEY}`
          )
          column2Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column2}&apiKey=${API_KEY}`
          )
          column3Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column3}&apiKey=${API_KEY}`
          )
          column4Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column4}&apiKey=${API_KEY}`
          )
          column5Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column5}&apiKey=${API_KEY}`
          )
          column6Data = await this.$axios.get(
            `https://newsapi.org/v2/everything?q=${vuexContext.state.column6}&apiKey=${API_KEY}`
          )

          currencyRates = await this.$axios.get(
            `https://api.nomics.com/v1/currencies/ticker?key=${API_COIN}`
          )

          vuexContext.state.column1News = column1Data.data.articles
          vuexContext.state.column2News = column2Data.data.articles
          vuexContext.state.column3News = column3Data.data.articles
          vuexContext.state.column4News = column4Data.data.articles
          vuexContext.state.column5News = column5Data.data.articles
          vuexContext.state.column6News = column6Data.data.articles
          vuexContext.state.currencyRates = currencyRates.data

          console.log(column1Data.data)
        } catch (e) {
          console.log(e)
        }
      },
    },
  })
}

export default createStore

//    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
