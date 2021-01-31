<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <!-- 父传子：通过“:自定义名称 = 要传过去的值” -->
      <Sider :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header @handleCollapsed="handleCollapsed" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import Header from './index/Header'
  import Sider from './index/Sider'
  import Content from './index/Content'
  import {
    getCurrentInstance,
    reactive,
    toRefs
  } from 'vue'
  export default {
    name: 'Index',
    components: {
      Header,
      Sider,
      Content
    },
    setup() {
      const {
        ctx
      } = getCurrentInstance()
      const data = reactive({
        selectedKeys: ['1'],
        collapsed: false,
      })

      const handleCollapsed = (value) => {
        data.collapsed = value.status
      }
      return {
        ...toRefs(data),
        handleCollapsed

      }
    }
  }
</script>

<style lang="scss">
  .ant-layout-sider {
    height: 100vh;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>