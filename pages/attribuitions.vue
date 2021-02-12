<template>
  <div class="container">
    <div class="wrapper">
      <div class="block block1">
        <div class="image">
          <img id="news" src="~assets/logos/news.png" alt="" />
        </div>
        <h3>
          In the building of this webpage I've used News API. Check their
          documentation, you will also fall in love with them:
          <a href="https://newsapi.org/">NEWS API</a>
        </h3>
      </div>
      <div class="block block2">
        <div class="image">
          <img id="nomics" src="~assets/logos/nomics.png" alt="" />
        </div>
        <h3>
          I've also used Nomics - Transparent Crypto Data API in order to give
          you the latest rates. You can check their webpage here:
          <a href="https://nomics.com/">NOMICS</a>
        </h3>
      </div>
      <div class="block block3">
        <p>
          With <span>&#10084;</span> by
          <a href="https://www.surarzayeva.com">Sura Rzayeva</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('toggleActivePage', 'attr')
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #050f1a;

  .wrapper {
    width: 40%;
    padding-top: 10rem;

    .image {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        align-self: center;
      }
      #news {
        width: 10rem;
      }
      #nomics {
        width: 20rem;
      }
    }
    h3 {
      text-align: center;
      margin: 2rem;
      line-height: 2rem;
    }
    .block2 {
      a {
        color: rgb(108, 0, 209);
      }
    }
    .block1 {
      a {
        color: rgb(46, 46, 255);
      }
    }
    .block3 {
      p {
        position: absolute;
        left: 50%;
        bottom: 10rem;
        transform: translateX(-50%);
        font-size: 1.3rem;

        a {
          font-weight: 700;
        }

        span {
          color: #00fff6;
        }
      }
    }
  }
}
</style>
