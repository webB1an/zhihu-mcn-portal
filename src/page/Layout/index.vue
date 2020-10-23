<template>
  <el-container class="main-container">
    <el-aside width="200px" class="sidebar-container">
      <side-bar />
    </el-aside>
    <el-main>
      <h2>{{ $route.name }}</h2>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import SideBar from '../../components/SideBar'
export default {
  components: { SideBar },
  created() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  .sidebar-container {
    width: 200px;
    overflow: hidden;
    background-color: #304156
  }
  .el-menu {
    border-right: unset
  }
}
</style>
