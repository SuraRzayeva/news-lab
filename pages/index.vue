<template>
  <div class="container">
    <div class="columns">
      <div class="column column1">
        <div class="label">
          <h4>Daily Highlights</h4>
        </div>
        <test-box
          v-for="article in $store.state.headlines"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'cnn'"
          :nbc="article.source.id === 'nbc-news'"
          black="true"
        />
      </div>
      <div class="column column2">
        <div class="label">
          <h4>BBC Sport</h4>
        </div>
        <test-box
          v-for="article in $store.state.sport"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'cnn'"
          :nbc="article.source.id === 'nbc-news'"
        />
      </div>

      <div class="column column3">
        <div class="label">
          <h4>Business Insider</h4>
        </div>
        <test-box
          v-for="article in $store.state.business"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'cnn'"
          :nbc="article.source.id === 'nbc-news'"
        />
      </div>
      <div class="column column4">
        <div class="label">
          <h4>buzzfeed</h4>
        </div>
        <test-box
          v-for="article in $store.state.cultural"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'cnn'"
          :nbc="article.source.id === 'nbc-news'"
        />
      </div>
      <div class="column column5"></div>
      <div class="column column6"></div>
      <div class="column column7"></div>
      <div class="column column8"></div>
      <div class="column column9"></div>
      <div class="column column10"></div>
    </div>
  </div>
</template>

<script>
import TestBox from '../components/TestBox.vue'
export default {
  name: 'Homepage',
  components: {
    TestBox,
  },
  props: ['primaryColor'],
  mounted() {
    console.log(this.$store.state.headlines)
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;

  .columns {
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .column {
      border-left: 1px solid black;
      border-right: 1px solid black;
      overflow-y: scroll;

      .label {
        color: white;
        width: 100%;
        display: flex;
        text-transform: uppercase;
        padding: 0.7rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ebebeb;

        h4 {
          font-size: 1rem;
        }
      }

      &1 {
        width: 30rem;
        max-width: 30rem;
        min-width: 30rem;
        background: black;
      }

      &2 {
        width: 30rem;
        max-width: 30rem;
        min-width: 30rem;

        .label {
          color: black;
          border-color: black;
        }
      }

      &3 {
        width: 55rem;
        .label {
          color: black;
          border-color: black;
        }
      }
      &4 {
        width: 30rem;
        background: crimson;
      }
      &5 {
        width: 55rem;
        background: chartreuse;
      }

      &6 {
        width: 30rem;
        background: chartreuse;
      }

      &7 {
        width: 30rem;
        background: chocolate;
      }

      &8 {
        width: 70rem;
        background: chartreuse;
      }
      &9 {
        width: 30rem;
        background: chartreuse;
      }
      &10 {
        width: 30rem;
        background: chartreuse;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    .columns {
      .column {
        width: 30rem;
        max-width: 30rem;
        min-width: 30rem;
      }
    }
  }
}
</style>
