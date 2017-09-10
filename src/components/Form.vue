<template>
  <div class="container">
   <div class="row">
     <div class="col-md-12">
       <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default">
              <div class="panel-heading">
                <input type="text" class="form-control" v-model="heading" placeholder="Heading">
              </div>
              <div class="panel-body" id="bodycontent">
                <textarea class="form-control" rows="3" v-model="content" placeholder="Content"></textarea>
              </div>
            </div>
            <button class="btn btn-info">CREATE</button>
          </div>
        </div>
      </div>
     </div>
     <router-link :to="'/'" class="btn btn-primary" id="btn-back"><span class="glyphicon glyphicon-home"></span></router-link>
   </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.container {
  width: 70%;
}
#bodycontent {
  border: 1px solid #485563;
  margin-bottom: -8px;
}

#btn-back {
  position: fixed;
  float: top;
  top: 45px;
  left: 0px;
  margin: 0;
}
</style>
