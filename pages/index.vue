<template>
  <div class="container">
    <div class="columns">
      <div class="column column1">
        <div class="label">
          <h4>{{ $store.state.column1Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column1News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'tech-crunch'"
          :nbc="article.source.id === 'nbc-news'"
          black="true"
          :url="article.url"
        />
      </div>
      <div class="column column2">
        <div class="label">
          <h4>{{ $store.state.column2Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column2News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :cnn="article.source.id === 'cnn'"
          :nbc="article.source.id === 'nbc-news'"
          :url="article.url"
        />
      </div>

      <div class="column column3">
        <div class="label">
          <h4>{{ $store.state.column3Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column3News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :url="article.url"
        />
      </div>
      <div class="column column4">
        <div class="label">
          <h4>{{ $store.state.column4Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column4News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :url="article.url"
        />
      </div>
      <div class="column column5">
        <div class="label">
          <h4>{{ $store.state.column5Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column5News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :url="article.url"
        />
      </div>
      <div class="column column6">
        <div class="label">
          <h4>{{ $store.state.column6Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column6News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
          :url="article.url"
        />
      </div>
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
  mounted() {
    this.$store.commit('toggleActivePage', 'home')
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
  color: #050f1a;

  .columns {
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .column {
      border-left: 1px solid #050f1a;
      border-right: 1px solid #050f1a;
      overflow-y: scroll;

      .label {
        color: black;
        width: 100%;
        display: flex;
        text-transform: uppercase;
        padding: 0.7rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #050f1a;

        h4 {
          font-size: 1rem;
        }
      }

      &1 {
        width: 30rem;
        max-width: 30rem;
        min-width: 30rem;
        background: #050f1a;

        .label {
          color: white;
          border-color: #ebebeb;
        }
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
          color: #050f1a;
          border-color: #050f1a;
        }
      }
      &4 {
        width: 30rem;
        background: #00fff6;

        .label {
          color: #050f1a;
          border-color: #050f1a;
        }
      }
      &5 {
        width: 55rem;
      }

      &6 {
        width: 30rem;
      }

      &7 {
        width: 30rem;
      }

      &8 {
        width: 70rem;
      }
      &9 {
        width: 30rem;
      }
      &10 {
        width: 30rem;
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
