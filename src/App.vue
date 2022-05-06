<template>
  <div class="app">
    我是vue app
    <div class="son">son</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
// .app {
//   height: 200px;
//   width: 200px;
//   .son {
//     color: yellow;
//   }
//   // color: red;
// }
.app {
  width: 50vw;
  height: 50vh;
  // background-color: pink;
  background-image: url(@/assets/images/test.png);
  background-repeat: no-repeat;
  // >>> .app {
  //   color: blue;
  // }
}
</style>


