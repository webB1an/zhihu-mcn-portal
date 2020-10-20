<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="form">
    <el-form-item label="名称" prop="name">
      <el-input v-model="form.name" />
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
import { saveCategory } from '../../api/category'
const defaultForm = {
  pros: '暂无',
  cons: '暂无',
  description: '暂无'
}
export default {
  data() {
    return {
      form: {
        name: '',
        description: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // this._saveCategory()
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = { ...this.form, ...defaultForm }
          this._saveCategory(data)
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
    _saveCategory(data) {
      saveCategory(data).then(res => {
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
