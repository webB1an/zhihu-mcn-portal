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
      >
        <el-option
          v-for="item in categoryList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">
        随机生成并复制数据
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { searchCategory } from '../../api/category'
import { getRandomProduct } from '../../api/relation'
export default {
  data() {
    return {
      form: {
        categoryId: ''
      },
      categoryList: [],
      productList: [],
      rules: {},
      randomList: []
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    submitForm() {
      if (!this.form.categoryId) return this.$message.error('请选择相关信息！')
      getRandomProduct(this.form.categoryId).then(res => {
        this.randomList = res
        let str = ''
        res.forEach(item => {
          for (const k in item) {
            let title = ''
            if (k === 'name') {
              title = '名称'
            }
            if (k === 'price') {
              title = '价格'
            }
            if (k === 'url') {
              title = '链接'
            }
            if (k === 'pros') {
              title = '优点'
            }
            if (k === 'cons') {
              title = '缺点'
            }
            if (k === 'description') {
              title = '描述'
            }
            str += this.generateMardown(title, item[k])
          }
        })
        this.$copyText(str).then(() => {
          this.$message.success('复制成功！')
        })
      })
    },
    generateMardown(title, content) {
      return `
**${title}**
${content}
`
    },
    remoteCategory(query = '') {
      this._getCategory(query)
    },
    _getCategory(name = '') {
      console.log(name)
      searchCategory(name).then(res => {
        this.categoryList = res
      })
    }
  }
}
</script>

<style>

</style>
