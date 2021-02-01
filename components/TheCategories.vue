<template>
  <div class="container">
    <ul>
      <li
        @click="fetchData('us')"
        :class="{ active: $store.state.countryIndex == 'us' }"
      >
        USA
      </li>
      <li
        @click="fetchData('de')"
        :class="{ active: $store.state.countryIndex == 'de' }"
      >
        Germany
      </li>
      <li
        @click="fetchData('gb')"
        :class="{ active: $store.state.countryIndex == 'gb' }"
      >
        UK
      </li>
      <li
        @click="fetchData('fr')"
        :class="{ active: $store.state.countryIndex == 'fr' }"
      >
        France
      </li>
      <li
        @click="fetchData('jp')"
        :class="{ active: $store.state.countryIndex == 'jp' }"
      >
        Japan
      </li>
      <li
        @click="fetchData('tr')"
        :class="{ active: $store.state.countryIndex == 'tr' }"
      >
        Turkey
      </li>
      <li
        @click="fetchData('ru')"
        :class="{ active: $store.state.countryIndex == 'ru' }"
      >
        Russia
      </li>
      <li
        @click="fetchData('ch')"
        :class="{ active: $store.state.countryIndex == 'cn' }"
      >
        China
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    fetchData(input) {
      this.$store.dispatch('changeCountryIndex', input)
      this.$store.dispatch('fetchNewData', input)
      console.log('clicked')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 5vh;
  padding: 1rem 4rem;
  border-bottom: 0.1rem black solid;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    li {
      font-size: 1.1rem;
      font-weight: 600;
      border-left: 0.1rem black solid;
      padding-left: 0.3rem;
      cursor: pointer;
    }
  }
  .active {
    color: crimson;
    border-color: crimson;
  }
}

@media screen and (max-width: 500px) {
  .container {
    padding: 1rem;
  }
}
</style>
