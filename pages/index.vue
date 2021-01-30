<template>
  <div class="container" :style="designSpecs"></div>
</template>

<script>
export default {
  name: 'Homepage',
  props: ['primaryColor'],
  computed: {
    designSpecs() {
      return {
        background: this.primaryColor,
      }
    },
  },
  mounted() {
    console.log(this.$store.state.welcomingActive)
  },
}
</script>
