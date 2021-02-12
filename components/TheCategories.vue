<template>
  <div class="container">
    <ul>
      <li v-for="coin in btc" :key="coin.id">
        {{ coin.id }} : {{ Math.round(coin.price * 100) / 100 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btc: '',
    }
  },

  created() {
    let bitcoin = this.$store.state.currencyRates.filter(
      (coin) =>
        coin.id === 'BTC' ||
        coin.id === 'ETH' ||
        coin.id === 'BNB' ||
        coin.id === 'DOGE' ||
        coin.id === 'DOT' ||
        coin.id === 'LINK'
    )

    this.btc = bitcoin
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 5vh;
  padding: 1rem 4rem;
  border-bottom: 0.1rem #050f1a solid;

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
      border-left: 0.1rem #050f1a solid;
      padding-left: 0.3rem;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    .tablet-hide {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    padding: 1rem;
    ul {
      :nth-child(even) {
        display: none;
      }
    }
  }
}
</style>
