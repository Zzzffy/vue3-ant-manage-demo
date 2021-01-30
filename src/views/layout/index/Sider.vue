<template>
  <h1 id="logo">
    <img :src="logoPath" alt="">
  </h1>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark"
    @click="getSelected">
    <!-- template不会被真实渲染出来，相当于占位符。这里使用它是为了将v-for和v-if分开 -->
    <template v-for="item in routes">
      <template v-if="!item.hidden">
        <!-- 如果没有子菜单，则渲染一级菜单 -->
        <a-menu-item v-if="!item.children" :key="item.path">

          <router-link :to="item.path">
            {{item.meta && item.meta.title}}
          </router-link>

        </a-menu-item>
        <!-- 如果有子菜单，则渲染子菜单 -->
        <a-sub-menu v-else :key="item.path">
          <!-- 有子级的主菜单 -->
          <template #title>
            <span>{{item.meta && item.meta.title}}</span>
          </template>
          <template v-if="item.children.length">
            <a-menu-item :key="subItem.path" v-for="subItem in item.children">
              <router-link :to="subItem.path">
                {{subItem.meta.title}}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
  import {
    reactive,
    toRefs
  } from 'vue'
  import {
    useRouter
  } from 'vue-router'

  export default {
    name: 'Sider',
    setup() {
      // 获取所有的路由
      const routes = useRouter().options.routes;
      console.log(routes);
      const data = reactive({
        selectedKeys: ['/index'],
        openKeys: [''],
        logoPath: require('../../../assets/images/school_logo.png')

      })
      const getSelected = ({
        item,
        key,
        keyPath
      }) => {
        console.log(item);
        console.log(key);
        console.log(keyPath);
      }
      return {
        ...toRefs(data),
        routes,
        getSelected
      }
    }

  }
</script>

<style scoped>
#logo {
  margin: 10px 0;
}
#logo img {
  width: 90%;
}
</style>