<!--suppress ALL -->
<template>
  <div class="mainContainer">
    <el-container class="el-container">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="1"
          :router="true"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"  route="imageLayer">ImageLayer
              </el-menu-item>
              <el-menu-item index="1-2" route="elevationlayer">
                elevationlayer
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.mainContainer{
  width:100%;
  height:100%;
}
.el-container{
  width:100%;
  height:100%;
}
</style>
