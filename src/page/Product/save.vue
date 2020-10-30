<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="form">
    <el-form-item label="名称" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model="form.price" type="number" />
    </el-form-item>
    <el-form-item label="链接" prop="url">
      <el-input v-model="form.url" />
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
        立即创建
      </el-button>
      <el-button @click="reset('form')">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { saveProduct } from '../../api/product'
// const defaultForm = {
//   pros: '暂无',
//   cons: '暂无',
//   description: '暂无'
// }
export default {
  data() {
    return {
      form: {
        name: '',
        price: '',
        url: '',
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
        ],
        url: [
          { required: true, message: '请输url', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // this._saveProduct()
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = { ...this.form }
          this._saveProduct(data)
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    _saveProduct(data) {
      saveProduct(data).then(res => {
      })
    }
  }
}
</script>

<style>
.form {
  width: 500px;
  margin: 0 auto;
}
</style>
