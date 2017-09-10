<template>
  <div id="app">
    <h1>aedel Kanban</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');
h1 {
  color: #e3e3e3;
  margin-top: -15px;
  margin-bottom: 35px;
  font-family: 'Libre Barcode 39 Text', cursive;
}
</style>
