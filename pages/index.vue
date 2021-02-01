<template>
  <div class="container">
    <div class="columns">
      <div class="column column1">
        <div class="label">
          <h4>{{ $store.state.column1Label }}</h4>
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
        />
      </div>
      <div class="column column7">
        <div class="label">
          <h4>{{ $store.state.column7Label }}</h4>
        </div>
        <test-box
          v-for="article in $store.state.column7News"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :image="article.urlToImage"
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
        color: black;
        width: 100%;
        display: flex;
        text-transform: uppercase;
        padding: 0.7rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid black;

        h4 {
          font-size: 1rem;
        }
      }

      &1 {
        width: 30rem;
        max-width: 30rem;
        min-width: 30rem;
        background: black;

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
          color: black;
          border-color: black;
        }
      }
      &4 {
        width: 30rem;
        background: crimson;

        .label {
          color: white;
          border-color: #ebebeb;
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
