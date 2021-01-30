<template>
  <div class="container">
    <ul>
      <li>USA</li>
      <li>Germany</li>
      <li>UK</li>
      <li>France</li>
      <li>Japan</li>
      <li>Spain</li>
      <li>Russia</li>
      <li>China</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 1rem 4rem;
  border-bottom: 0.1rem black solid;

  ul {
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: space-between;

    li {
      font-size: 1.1rem;
      font-weight: 600;
      border-left: 0.1rem black solid;
      padding-left: 0.3rem;
      cursor: pointer;
    }
  }
}
</style>
