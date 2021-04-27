<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="form">
    <el-form-item label="分类" prop="categoryId">
      <el-select
        v-model="form.categoryId"
        filterable
        remote
        reserve-keyword
        placeholder="可输入关键词"
        :remote-method="remoteCategory"
        @change="changeCategory"
      >
        <el-option
          v-for="item in categoryList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="商品" prop="productIds">
      <el-select
        v-model="form.productIds"
        filterable
        remote
        reserve-keyword
        :remote-method="remoteProduct"
        multiple
        placeholder="请选择商品"
      >
        <el-option
          v-for="item in productList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">
        立即创建
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { searchProduct } from '../../api/product'
import { searchCategory } from '../../api/category'
import { saveRelation } from '../../api/relation'
export default {
  data() {
    return {
      form: {
        categoryId: '',
        productIds: []
      },
      categoryList: [],
      productList: [],
      rules: {}
    }
  },
  created() {
    this._getCategory()
    // this._getProduct()
  },
  methods: {
    submitForm() {
      const { categoryId, productIds } = this.form
      if (!categoryId || !productIds.length) return this.$message.error('请选择相关信息！')
      saveRelation(this.form).then(res => {
        // this.$message.success('保存成功！')
      })
    },
    changeCategory(query) {
      this._getProduct(this.categoryList.find(category => category.id === query).name)
    },
    remoteCategory(query = '') {
      this._getCategory(query)
    },
    remoteProduct(query = '') {
      this._getProduct(query)
    },
    _getCategory(name = '') {
      searchCategory(name).then(res => {
        this.categoryList = res
      })
    },
    _getProduct(name = '') {
      searchProduct(name).then(res => {
        this.productList = res
        this.form.productIds = res.map(product => product.id)
      })
    }
  }
}
</script>

<style>

</style>
