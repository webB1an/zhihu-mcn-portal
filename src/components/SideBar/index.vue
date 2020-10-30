<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eff"
  >
    <el-submenu index="/product">
      <template slot="title">
        <i class="el-icon-goods" />
        <span>商品</span>
      </template>
      <router-link to="/product/save">
        <el-menu-item index="/product/save">
          <span slot="title">生成商品</span>
        </el-menu-item>
      </router-link>
      <router-link to="/product/list">
        <el-menu-item index="/product/list">
          <span slot="title">商品列表</span>
        </el-menu-item>
      </router-link>
      <router-link to="/product/editor">
        <el-menu-item index="/product/editor">
          <span slot="title">编辑商品</span>
        </el-menu-item>
      </router-link>
    </el-submenu>

    <el-submenu index="/category">
      <template slot="title">
        <i class="el-icon-notebook-1" />
        <span>类目</span>
      </template>
      <router-link to="/category/save">
        <el-menu-item index="/category/save">
          <span slot="title">生成类目</span>
        </el-menu-item>
      </router-link>

      <router-link to="/category/list">
        <el-menu-item index="/category/list">
          <span slot="title">类目列表</span>
        </el-menu-item>
      </router-link>

      <router-link to="/category/editor">
        <el-menu-item index="/category/editor">
          <span slot="title">编辑类目</span>
        </el-menu-item>
      </router-link>
    </el-submenu>

    <el-submenu index="/relation">
      <template slot="title">
        <i class="el-icon-connection" />
        <span>关系</span>
      </template>
      <router-link to="/relation/save">
        <el-menu-item index="/relation/save">
          <span slot="title">绑定关系</span>
        </el-menu-item>
      </router-link>

      <router-link to="/relation/list">
        <el-menu-item index="/relation/list">
          <span slot="title">关系列表</span>
        </el-menu-item>
      </router-link>

      <router-link to="/relation/random">
        <el-menu-item index="/relation/random">
          <span slot="title">随机生成</span>
        </el-menu-item>
      </router-link>
    </el-submenu>
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
