<template>
  <div>
    <the-header primaryColor="red" />
    <the-welcome />
    <the-categories />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheWelcome from '@/components/TheWelcome'
import TheCategories from '@/components/TheCategories'
export default {
  name: 'TheLayout',
  components: {
    TheHeader,
    TheWelcome,
    TheCategories,
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('deactivateWelcoming')
    }, 2000)
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #ebebeb;
}

ul {
  list-style: none;
}
</style>
