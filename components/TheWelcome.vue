<template>
  <transition name="wrapper">
    <div class="container" v-if="$store.state.welcomingActive">
      <h1>Hello there, babe</h1>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(148, 9, 9);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
