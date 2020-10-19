<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eff"
  >
    <router-link to="/product/save">
      <el-menu-item index="/product/save">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">生成商品</span>
      </el-menu-item>
    </router-link>

    <router-link to="/product/editor">
      <el-menu-item index="/product/editor">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">编辑商品</span>
      </el-menu-item>
    </router-link>

    <router-link to="/category/save">
      <el-menu-item index="/category/save">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">生成类目</span>
      </el-menu-item>
    </router-link>

    <router-link to="/category/editor">
      <el-menu-item index="/category/editor">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">编辑类目</span>
      </el-menu-item>
    </router-link>

    <router-link to="/relation/save">
      <el-menu-item index="/relation/save">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">绑定关系</span>
      </el-menu-item>
    </router-link>

    <router-link to="/relation/random">
      <el-menu-item index="/relation/random">
        <!-- <i class="el-icon-menu" /> -->
        <span slot="title">随机生成</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style>

</style>
