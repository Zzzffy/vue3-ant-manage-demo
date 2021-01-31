<template>
  <div id="header">
    <menu-unfold-outlined v-if="data.collapsed" class="trigger" @click="handleCollapsed" />
    <menu-fold-outlined v-else class="trigger" @click="handleCollapsed" />
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link me" @click="e => e.preventDefault()">
        <img src="../../../assets/me.png" style="width: 30px" />
      </a>

      <template #overlay>
        <a-menu class="font-12">
          <a-menu-item key="0">
            <a href="#">12323123123</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="">
              <span class="cn">中文</span>
              <span>英文</span>
            </a>
          </a-menu-item>
          <a-menu-item key="0">
            <a href="#">退出</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
  import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import {
    getCurrentInstance,
    reactive
  } from 'vue'
  export default {
    name: 'Header',
    components: {
      MenuFoldOutlined,
      MenuUnfoldOutlined
    },
    setup() {
      const {
        ctx
      } = getCurrentInstance()
      const data = reactive({
        collapsed: false
      })
      const handleCollapsed = () => {
        data.collapsed = !data.collapsed;
        // 子传父
        ctx.$emit('handleCollapsed', {'status': data.collapsed})
      }

      return {
        data,
        handleCollapsed
      }
    }

  }
</script>

<style scoped>
  #header {
    padding: 0 20px;
    height: 64px;
  }

  .me {
    float: right;
    margin-top: 15px;
  }

  .font-12 a {
    font-size: 12px;
  }

  .cn {
    border-right: 2px solid #ccc;
    padding-right: 3px;
    margin-right: 4px;
  }
</style>