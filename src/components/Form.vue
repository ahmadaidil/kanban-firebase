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
              <h4 id="warning-msg" v-if="msg">{{msg}}</h4>
              <div class="panel-heading">
                <input type="text" class="form-control" v-model="newTask.heading" placeholder="Heading">
              </div>
              <div class="panel-body" id="bodycontent">
                <textarea class="form-control" rows="3" v-model="newTask.content" placeholder="Content"></textarea>
              </div>
            </div>
            <button class="btn btn-info" @click="submit">CREATE</button>
          </div>
        </div>
      </div>
     </div>
     <router-link :to="'/'" class="btn btn-primary" id="btn-back"><span class="glyphicon glyphicon-home"></span></router-link>
   </div>
</template>

<script>

export default {
  data() {
    return {
      newTask: {
        heading: null,
        content: null,
        status: 1,
      },
      msg: null,
    };
  },
  methods: {
    submit() {
      if (this.newTask.heading == null || this.newTask.heading === '' || this.newTask.content == null || this.newTask.content === '') {
        this.msg = 'heading and content can\'t null';
      } else {
        this.$tasksRef.push(this.newTask);
        this.$router.push('/');
      }
    },
  },
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

#warning-msg {
  color:red;
  margin-top:-5px;
}
</style>
