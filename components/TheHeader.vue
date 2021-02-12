<template>
  <div class="container">
    <div class="time">
      <clock />
      <p>{{ getDate }}</p>
    </div>
    <div class="logo">
      <nuxt-link to="/"> <span>Crypto</span><span>News</span></nuxt-link>
    </div>
    <div class="navbar">
      <a href="https://surarzayeva.com" target="_blank"> <loupe /> </a>
      <div class="burger-menu" @click="toggleMenu">
        <div
          class="line line-1"
          :class="{ line1Close: $store.state.menuOpen }"
        ></div>
        <div
          class="line line-2"
          :class="{ line2Close: $store.state.menuOpen }"
        ></div>
        <div
          class="line line-3"
          :class="{ line3Close: $store.state.menuOpen }"
        ></div>
      </div>
    </div>
    <sidebar />
  </div>
</template>

<script>
import Clock from '~/assets/icon/clock'
import Loupe from '~/assets/icon/loupe'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'TheHeader',
  components: {
    Clock,
    Loupe,
    Sidebar,
  },
  data() {
    return {
      back: 'green',
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
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
  background: #050f1a;

  .time {
    display: flex;
    width: 33.333%;

    p {
      margin: 0 1rem;
      color: #00fff6;
    }
  }

  .logo {
    width: 33.333%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      position: relative;
      display: inline-block;
      padding: 15px 30px;
      color: #00fff6;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 600;
      text-decoration: none;
      font-size: 1.5rem;
      overflow: hidden;
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
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
      cursor: pointer;
      z-index: 200;

      .line {
        height: 0.2rem;
        width: 100%;
        background: #00fff6;
        border-radius: 2rem;
        transition: 0.2s ease all;
      }
      .line1Close {
        transform: translate(0, 0.7rem) rotate(45deg);
        background: #050f1a;
      }
      .line2Close {
        opacity: 0;
      }
      .line3Close {
        transform: translate(0, -0.7rem) rotate(-45deg);
        background: #050f1a;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    padding: 1.5rem;

    .logo {
      a {
        font-size: 1.2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
    }

    .time {
      p {
        font-size: 1rem;
      }
    }

    .navbar {
      .burger-menu {
        width: 1.4rem;
        height: 1.4rem;
        .line {
          height: 0.1rem;
        }
      }
    }
  }
}
</style>
