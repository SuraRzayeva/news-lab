<template>
  <div class="wrapper" :class="{ hide: !$store.state.menuOpen }">
    <ul @click="toggleMenu">
      <nuxt-link v-if="$store.state.activePage !== 'home'" to="/"
        ><li>Back to news</li></nuxt-link
      >
      <nuxt-link v-if="$store.state.activePage !== 'attr'" to="/attribuitions"
        ><li>Attribuitions</li></nuxt-link
      >
      <a target="_blank" href="https://www.surarzayeva.com"><li>Author</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 10vh;
  background: #00fff6;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  transition: 0.2s ease all;
  color: #050f1a;

  ul {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0 4rem;

    li {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 1rem 0;
      letter-spacing: 1px;
      color: #050f1a;
      text-transform: uppercase;
    }
  }
}
.hide {
  top: -50%;
}
</style>
