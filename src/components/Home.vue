<template>
  <div class="home">
    <h1>aedel Kanban</h1>
    <router-view></router-view>
    <button class="btn btn-primary sticky-top" id="btn-add"><span class="glyphicon glyphicon-plus"></span></button>
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

#btn-add {
  position: fixed;
  float: top;
  top: 45px;
  left: 0px;
  margin: 0;
  /* padding: 5px 3px; */
}
</style>
