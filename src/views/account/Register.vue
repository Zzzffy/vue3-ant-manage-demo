<template>
  <div class="register-form">
    <a-form ref="ruleForm" :model="registerInfo" :rules="rules" :label-col="layout.labelCol"
      :wrapper-col="layout.wrapperCol">
      <a-form-item ref="name" label="用户名" name="username">
        <a-input v-model:value="registerInfo.username" />
      </a-form-item>
      <a-form-item label="密码" name="password" required>
        <a-input v-model:value="registerInfo.password" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item label="确认密码" name="checkPassword">
        <a-input v-model:value="registerInfo.checkPassword" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item name="vertifyCode" label="验证码">
        <a-row :gutter="6">
          <a-col :span="16">
            <a-input v-model:value="registerInfo.vertifyCode" type="text" />
          </a-col>
          <a-col :span="8" class="code">
            <a-button type="primary" @click="getCode" :disabled="btn_disabled" :loading="btn_loading">{{btn_text}}
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 13, offset: 5 }">
        <a-button type="primary" @click="onSubmit">
          注册
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
          重置
        </a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<script>
  import {
    reactive,
    toRefs,
    getCurrentInstance
  } from 'vue'
  import {
    useRouter
  } from 'vue-router'
  import {
    message
  } from 'ant-design-vue';
  export default {
    name: 'Login',
    setup() {
      const {
        ctx
      } = getCurrentInstance();
      // 获取路由 进行页面跳转
      const router = useRouter();
      // 提交表单
      const onSubmit = () => {
        ctx.$refs.ruleForm
          .validate()
          .then(() => {
            console.log('success');
            // 发起请求
            message.success('注册成功！')
            // 跳转至登录页面
            router.push('/')
          })
          .catch(error => {
            console.log('error', error);
          });
      }
      // 重置表单
      const resetForm = () => {
        ctx.$refs.ruleForm.resetFields();
      }
      // 检验密码
      let validatePass = async (rule, value) => {
        if (value === '') {
          return Promise.reject('请输入密码');
        } else {
          if (ctx.registerInfo.checkPassword !== '') {
            ctx.$refs.ruleForm.validateField('ok');
          }
          return Promise.resolve();
        }
      };
      // 检验再次输入密码
      let validatePass2 = async (rule, value, callback) => {
        if (value === '') {
          return Promise.reject('请再次输入密码');
        } else if (value !== ctx.registerInfo.password) {
          return Promise.reject("密码不一致!");
        } else {
          return Promise.resolve();
        }
      };
      // 发送验证码
      const getCode = () => {
        console.log('111');
        // 没输入用户名不允许执行下面操作
        if (!formConfig.registerInfo.username) {
          message.info('请输入用户名');
          return false;
        }
        // 如果存在定时器，先清除再开启，否则点击按钮速度会越来越快
        if (formConfig.timer) {
          clearInterval(formConfig.timer)
        }
        formConfig.timer = setInterval(() => {
          const t = formConfig.time--;
          formConfig.btn_text = `${t}秒`;
          formConfig.btn_disabled = true;
          if (t <= 0) {
            clearInterval(formConfig.timer);
            formConfig.btn_text = `重新获取`;
            formConfig.btn_disabled = false;
          }

        }, 1000);
      };
      // 表单参数
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
        // 用户注册信息
        registerInfo: {
          username: '',
          password: '',
          checkPassword: '',
          vertifyCode: ''
        },
        // 检验规则
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            validator: validatePass,
            trigger: 'change'
          }],
          checkPassword: [{
            validator: validatePass2,
            trigger: 'change'
          }],
          vertifyCode: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }]
        },
        // 点击发送验证码后按钮的状态
        btn_text: "获取验证码",
        btn_loading: false,
        btn_disabled: false,
        time: 10,
        timer: null
      })

      const data = toRefs(formConfig);
      return {
        ...data,
        onSubmit,
        resetForm,
        getCode
      }
    }
  }
</script>

<style scoped lang="scss">
  .register-form {
    width: 300px;
    height: 300px;
    margin: 20px auto !important;
    background-color: #ccc;

  }

  .code {
    font-size: 12px;
  }
</style>