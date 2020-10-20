<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="form">
    <el-form-item label="名称" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model="form.price" type="number" />
    </el-form-item>
    <el-form-item label="优点" prop="pros">
      <el-input v-model="form.pros" />
    </el-form-item>
    <el-form-item label="缺点" prop="cons">
      <el-input v-model="form.cons" />
    </el-form-item>
    <el-form-item label="描述" prop="description">
      <el-input v-model="form.description" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit('form')">
        确认编辑
      </el-button>
      <el-button @click="reset('form')">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { productDetail, editorProduct } from '../../api/product'

export default {
  data() {
    return {
      form: {
        name: '',
        price: '',
        pros: '',
        cons: '',
        description: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const { id } = this.$route.query
    if (!id) return
    this._getDetail(id)
  },
  methods: {
    _getDetail(id) {
      productDetail(id).then(res => {
        this.form = res
      })
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = { ...this.form }
          editorProduct(data)
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
