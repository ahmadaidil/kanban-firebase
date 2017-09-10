<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===1">
              <a @click="remove(index)" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading">{{task.heading}}</div>
              <div class="panel-body todo" id="bodycontent">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      
                    </div>
                    <div class="col-md-6">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      
                    </div>
                    <div class="col-md-6">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">Doing</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===2">
              <a @click="remove(index)" class="pull-right doing"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading">{{task.heading}}</div>
              <div class="panel-body doing" id="bodycontent">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      <button @click="prev(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                    <div class="col-md-6">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      <button @click="prev(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
                    </div>
                    <div class="col-md-6">
                      <button @click="next(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Done</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default" v-for="(task, index) in tasks" :key="index" v-if="task.status===3">
              <a @click="remove(index)" class="pull-right done"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading">{{task.heading}}</div>
              <div class="panel-body done" id="bodycontent">
                {{task.content}}
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      <button @click="prev(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      <button @click="prev(task, index)" class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="'/add'" class="btn btn-primary" id="btn-add"><span class="glyphicon glyphicon-plus"></span></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: null,
      keys: null,
    };
  },
  methods: {
    getTasks() {
      this.$tasksRef.on('value', (data) => {
        this.tasks = data.val();
      });
    },
    remove(index) {
      this.$tasksRef.child(index).remove();
    },
    next(task, index) {
      this.$tasksRef.child(index).update({
        status: task.status + 1,
      });
    },
    prev(task, index) {
      this.$tasksRef.child(index).update({
        status: task.status - 1,
      });
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<style scoped>
#bodycontent  {
  border: 1px solid #485563;
}

.todo {
  color: #df691a;
}

.doing {
  color: #f0ad4e;
}

.done {
  color: #5cb85c
}

#btn-add {
  position: fixed;
  float: top;
  top: 45px;
  left: 0px;
  margin: 0;
}
</style>
