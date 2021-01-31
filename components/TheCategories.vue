<template>
  <div class="container">
    <ul>
      <li @click="$store.dispatch('changeCountryIndex', 'usa')">USA</li>
      <li @click="$store.dispatch('changeCountryIndex', 'de')">Germany</li>
      <li @click="$store.dispatch('changeCountryIndex', 'uk')">UK</li>
      <li @click="$store.dispatch('changeCountryIndex', 'fr')">France</li>
      <li @click="$store.dispatch('changeCountryIndex', 'de')">Japan</li>
      <li @click="$store.dispatch('changeCountryIndex', 'usa')">Spain</li>
      <li @click="$store.dispatch('changeCountryIndex', 'usa')">Russia</li>
      <li @click="$store.dispatch('changeCountryIndex', 'usa')">China</li>
    </ul>
  </div>
</template>

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
}

@media screen and (max-width: 500px) {
  .container {
    padding: 1rem;
  }
}
</style>
