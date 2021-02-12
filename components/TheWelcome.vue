<template>
  <transition name="wrapper">
    <div class="container" v-if="$store.state.welcomingActive">
      <a href="#"> CRYPTO News </a>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
$button-color: #00fff6;
$second-color: #050f1a;

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #050f1a;
  font-family: 'Questrial', Impact, sans-serif;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  a {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: $button-color;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: 2rem;
    overflow: hidden;
    transition: 0.2s;
  }
}
.wrapper-enter-active,
.wrapper-leave-active {
  transition: all 0.3s ease-out;
  opacity: 1;
}
.wrapper-enter,
.wrapper-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .container {
    a {
      font-size: 1.2rem;
    }
  }
}
</style>
