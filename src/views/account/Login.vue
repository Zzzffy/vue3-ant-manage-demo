<template>
  <div class="login-form">
    <a-form ref="ruleForm" :model="loginInfo" :rules="rules" :label-col="layout.labelCol"
      :wrapper-col="layout.wrapperCol">
      <a-form-item ref="name" label="用户名" name="username">
        <a-input v-model:value="loginInfo.username" />
      </a-form-item>
      <a-form-item label="密码" name="password" >
        <a-input v-model:value="loginInfo.password" type="password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 13, offset: 5 }">
        <a-button type="primary" @click="onSubmit">
          登录
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
          重置
        </a-button>
      </a-form-item>
    </a-form>
    <div class="others">
      <span class="psw">
        <router-link to="/forgetpassword">忘记密码</router-link>
      </span>
      <span>
        <router-link to="/register">注册</router-link>
      </span>
    </div>
  </div>
</template>

<script>
  import {
    reactive,
    toRefs,
    getCurrentInstance
  } from 'vue'
  export default {
    name: 'Login',
    setup() {
      const {
        ctx
      } = getCurrentInstance();
      const formConfig = reactive({
        // 设置文字和输入框宽度
        layout: {
          labelCol: {
            span: 5
          },
          wrapperCol: {
            span: 13
          }
        },
        loginInfo: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
        },

      })
      const data = toRefs(formConfig);
      const onSubmit = () => {
        ctx.$refs.ruleForm
          .validate()
          .then(() => {
            console.log('success');
          })
          .catch(error => {
            console.log('error', error);
          });
      }
      const resetForm = () => {
        ctx.$refs.ruleForm.resetFields();
      }
      return {
        ...data,
        onSubmit,
        resetForm

      }
    }
  }
</script>

<style scoped lang="scss">
  .login-form {
    width: 300px;
    height: 300px;
    margin: 20px auto !important;
    background-color: #ccc;

  }

  .login-form-button {
    width: 100%;
  }

  .login-form .ant-form-item-label {
    font-size: 14px;
  }

  .others {
    font-size: 12px;

  }

  .psw {
    margin-left: 150px !important;
    margin-right: 6px !important;
  }
</style>