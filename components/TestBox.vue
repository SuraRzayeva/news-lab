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
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestBox',
  props: ['title', 'image', 'description', 'cnn', 'nbc', 'black'],
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem 1rem;
  margin-bottom: 1rem;

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .title {
    margin: 1rem 0;
    h1 {
      font-size: 3.5rem;
      font-weight: 800;
    }
    .black {
      color: white;
    }
    .crimson {
      color: black;
    }
    .green {
      color: black;
    }
  }
  .description {
    margin-top: 1rem;
    p {
      font-size: 1.6rem;
      font-weight: 600;
    }
    .black {
      color: white;
    }
    .crimson {
      color: black;
    }
    .green {
      color: black;
    }
  }
}
.crimson {
  background: crimson;
  color: black;
}
.green {
  background: greenyellow;
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
