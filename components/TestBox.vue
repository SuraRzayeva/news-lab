<template>
  <div class="wrapper" :class="{ crimson: cnn, green: nbc, black: black }">
    <div class="title">
      <h1 :class="{ crimson: cnn, green: nbc, black: black }">{{ title }}</h1>
    </div>
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <div class="description">
      <p :class="{ crimson: cnn, green: nbc, black: black }">
        {{ description }}
      </p>
      <a :href="url" target="_blank">
        <h3 :class="{ readmore: black }">Read more</h3></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestBox',
  props: ['title', 'image', 'description', 'cnn', 'nbc', 'black', 'url'],
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem 1rem;

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .title {
    margin: 1rem 0;
    h1 {
      font-size: 3rem;
      font-weight: 800;
    }
    .black {
      color: white;
    }
  }
  .description {
    margin-top: 1rem;
    p {
      font-size: 1.6rem;
      font-weight: 600;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.7rem;
    }
    .black {
      color: white;
    }
    .readmore {
      color: white;
    }
  }
}
.crimson {
  background: #00fff6;
  color: #050f1a;
}

@media screen and (max-width: 500px) {
  .wrapper {
    .title {
      margin: 0;
      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>
