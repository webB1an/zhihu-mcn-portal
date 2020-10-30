<template>
  <div>
    选择分类：
    <el-select
      v-model="categoryId"
      placeholder="可输入关键词"
      @change="selectCategory"
    >
      <el-option
        v-for="item in categoryList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>

    <el-table
      class="mt20"
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
    </el-table>
  </div>
</template>

<script>
import { searchCategory } from '../../api/category'
import { getRelationList } from '../../api/relation'
export default {
  data() {
    return {
      categoryId: '',
      categoryList: [],
      tableData: []
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory(name = '') {
      console.log(name)
      searchCategory(name).then(res => {
        this.categoryList = res
      })
    },
    selectCategory() {
      console.log(this.categoryId)
      getRelationList(this.categoryId).then(res => {
        this.tableData = res
      })
    }
  }
}
</script>

<style>

</style>
