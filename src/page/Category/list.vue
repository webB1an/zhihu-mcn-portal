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
        <el-button type="text" size="small" @click="handleEditor(scope.row.id)">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { categorylist } from '../../api/category'
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
        console.log('res', res)
        this.tableData = res
      })
    },
    handleEditor(id) {
      console.log(id)
      this.$router.push({ path: '/category/editor', query: { id }})
    }
  }
}
</script>

<style>

</style>
