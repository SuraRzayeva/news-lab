<template>
  <div class="container">
    <div class="time">
      <clock />
      <p>{{ getDate }}</p>
    </div>
    <div class="logo">
      <img src="../assets/icons/logo.svg" alt="" />
    </div>
    <div class="navbar">
      <loupe />
      <div class="burger-menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from '~/assets/icons/clock'
import Loupe from '~/assets/icons/loupe'

export default {
  name: 'TheHeader',
  components: {
    Clock,
    Loupe,
  },
  data() {
    return {
      back: 'green',
    }
  },
  computed: {
    getDate() {
      let d = new Date()
      return `${d.toDateString()}`
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 10vh;
  display: flex;
  font-size: 1.4rem;
  padding: 3rem 4rem;
  align-items: center;
  border-bottom: 0.1rem black solid;

  .time {
    display: flex;
    width: 33.333%;

    p {
      margin: 0 1rem;
    }
  }

  .logo {
    width: 33.333%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 6rem;
    }
  }
  .navbar {
    width: 33.333%;
    display: flex;
    justify-content: flex-end;

    .burger-menu {
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 3rem;

      .line {
        height: 0.2rem;
        width: 100%;
        background: black;
        border-radius: 2rem;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    padding: 1rem;

    .time {
      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
