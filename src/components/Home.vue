<template>
  <div class="home">
    <h1>aedel Kanban</h1>
    <button class="btn btn-default pull-left"><span class="glyphicon glyphicon-plus"></span></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');
h1 {
  color: #e3e3e3;
  margin-top: -15px;
  margin-bottom: 35px;
  font-family: 'Libre Barcode 39 Text', cursive;
}
</style>
