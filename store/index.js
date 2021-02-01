import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  const API_KEY = '3568249ca16c4017860f0393fe35be1e'
  return new Vuex.Store({
    state: {
      welcomingActive: true,
      headlines: [],
      column2News: [],
      column3News: [],
      column4News: [],
      column5News: [],
      column6News: [],
      column7News: [],
      countryIndex: 'us',
      column1Label: 'Daily Highlights',
      column2: 'business-insider',
      column2Label: 'Business Insider',
      column3: 'cnn',
      column3Label: 'CNN US',
      column4: 'the-washington-times',
      column4Label: 'The Washington Times',
      column5: 'fox-news',
      column5Label: 'Fox News',
      column6: 'techcrunch',
      column6Label: 'Tech Crunch',
      column7: 'buzzfeed',
      column7Label: 'Buzzfeed',
    },

    mutations: {
      deactivateWelcoming(state) {
        state.welcomingActive = false
      },
      changeCountryIndex(state, input) {
        state.countryIndex = input
        if (input === 'de') {
          state.column1Label = 'Daily Highlights'
          state.column2 = 'business-insider'
          state.column2Label = 'Business Insider'
          state.column3 = 'cnn'
          state.column3Label = 'CNN US'
          state.column4 = 'the-washington-times'
          state.column4Label = 'The Washington Times'
          state.column5 = 'fox-news'
          state.column5Label = 'Fox News'
          state.column6 = 'techcrunch'
          state.column6Label = 'Tech Crunch'
          state.column7 = 'buzzfeed'
          state.column7Label = 'Buzzfeed'
        } else if (input == 'gb') {
        } else if (input == 'fr') {
        } else if (input == 'jp') {
        }

        // REMINDER: Change countries which have more channels
        // REMINDER: if input === filan shey update relevant channels, if not do this.
      },
    },
    actions: {
      deactivateWelcoming(context) {
        context.commit('deactivateWelcoming')
      },
      changeCountryIndex(context, input) {
        context.commit('changeCountryIndex', input)
      },
      async fetchNewData(context) {
        let headlines
        let column2Data
        let column3Data
        let column4Data
        let column5Data
        let column6Data
        let column7Data
        try {
          headlines = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?country=${context.state.countryIndex}&apiKey=${API_KEY}`
          )
          column2Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column2}&apiKey=${API_KEY}`
          )
          column3Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column3}&apiKey=${API_KEY}`
          )
          column4Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column4}&apiKey=${API_KEY}`
          )
          column5Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column5}&apiKey=${API_KEY}`
          )
          column6Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column6}&apiKey=${API_KEY}`
          )
          column7Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${context.state.column7}&apiKey=${API_KEY}`
          )
          context.state.headlines = headlines.data.articles
          context.state.column2News = column2Data.data.articles
          context.state.column3News = column3Data.data.articles
          context.state.column4News = column4Data.data.articles
          context.state.column5News = column5Data.data.articles
          context.state.column6News = column6Data.data.articles
          context.state.column7News = column7Data.data.articles
        } catch (e) {
          console.log(e)
        }
      },
      async nuxtServerInit(vuexContext, context) {
        let headlines
        let column2Data
        let column3Data
        let column4Data
        let column5Data
        let column6Data
        let column7Data
        try {
          headlines = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?country=${vuexContext.state.countryIndex}&apiKey=${API_KEY}`
          )
          column2Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column2}&apiKey=${API_KEY}`
          )
          column3Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column3}&apiKey=${API_KEY}`
          )
          column4Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column4}&apiKey=${API_KEY}`
          )
          column5Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column5}&apiKey=${API_KEY}`
          )
          column6Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column6}&apiKey=${API_KEY}`
          )
          column7Data = await this.$axios.get(
            `https://newsapi.org/v2/top-headlines?sources=${vuexContext.state.column7}&apiKey=${API_KEY}`
          )
          vuexContext.state.headlines = headlines.data.articles
          vuexContext.state.column2News = column2Data.data.articles
          vuexContext.state.column3News = column3Data.data.articles
          vuexContext.state.column4News = column4Data.data.articles
          vuexContext.state.column5News = column5Data.data.articles
          vuexContext.state.column6News = column6Data.data.articles
          vuexContext.state.column7News = column7Data.data.articles
        } catch (e) {
          console.log(e)
        }
      },
    },
  })
}

export default createStore

//    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
