<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <div class="panel-body">
            <div class="panel panel-default">
              <a href="" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading" id="headcontent">Panel heading</div>
              <div class="panel-body" id="bodycontent">
                Panel content
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
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
            <div class="panel panel-default">
              <a href="" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading">Panel heading</div>
              <div class="panel-body" id="bodycontent">
                Panel content
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-chevron-right"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-menu-down"></span></button>
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
            <div class="panel panel-default">
              <a href="" class="pull-right"><span class="glyphicon glyphicon-remove"></span></a>
              <div class="panel-heading">Panel heading</div>
              <div class="panel-body" id="bodycontent">
                Panel content
                <div class="content-fluid">
                  <div class="row visible-md visible-lg">
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                  </div>
                  <div class="row visible-sm visible-xs">
                    <div class="col-md-6">
                      <button class="btn btn-default"><span class="glyphicon glyphicon-menu-up"></span></button>
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

};
</script>

<style scoped>
#bodycontent {
  border: 1px solid #485563;
}

#btn-add {
  position: fixed;
  float: top;
  top: 45px;
  left: 0px;
  margin: 0;
}
</style>
