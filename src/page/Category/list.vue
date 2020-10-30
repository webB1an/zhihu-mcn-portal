<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="名称"
    />
    <el-table-column
      prop="description"
      label="描述"
    />
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
    >
      <template slot-scope="scope">
        <el-link type="primary" @click="handleEditor(scope.row.id)">
          编辑
        </el-link>
        <el-link type="danger" @click="handleDelete(scope.row.id)">
          删除
        </el-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { categorylist, deleteCategory } from '../../api/category'
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
      categorylist().then(res => {
        this.tableData = res
      })
    },
    handleEditor(id) {
      this.$router.push({ path: '/category/editor', query: { id }})
    },
    handleDelete(id) {
      console.log(id)
      deleteCategory(id).then(res => {
        this._getList()
      })
    }
  }
}
</script>

<style>

</style>
