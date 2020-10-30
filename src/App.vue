<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box
}
html, body, #app {
  width: 100%;
  height: 100%;
}
.el-link {
  margin-right: 10px
}
.mt20 {
  margin-top: 20px
}
</style>
