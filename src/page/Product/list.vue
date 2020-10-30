<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="名称"
      width="180"
    />
    <el-table-column
      prop="price"
      label="价格"
    />
    <el-table-column
      prop="url"
      label="链接"
    >
      <template slot-scope="scope">
        <a :href="scope.row.url" target="_blank">点击跳转</a>
      </template>
    </el-table-column>
    <el-table-column
      prop="pros"
      label="优点"
    />
    <el-table-column
      prop="cons"
      label="缺点"
    />
    <el-table-column
      prop="description"
      label="描述"
      width="230px"
    >
      <template slot-scope="scope">
        {{ scope.row.description.substring(0, 10) }}
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
    >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleEditor(scope.row.id)">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { productlist } from '../../api/product'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this._getList()
  },
  methods: {
    _getList() {
      productlist().then(res => {
        this.tableData = res
      })
    },
    handleEditor(id) {
      this.$router.push({ path: '/product/editor', query: { id }})
    }
  }
}
</script>

<style>

</style>
