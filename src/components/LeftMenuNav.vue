<template>
  <el-aside width="200px" style="background-color: #030021;margin-top: 20px; margin-right: 0px;">
    <!-- 一级菜单 -->
    <el-menu :default-active="0" @select="handleMenuSelect" >
      <el-menu-item :index="1" style="background-color: #000000;" > 项目管理</el-menu-item>
      <el-menu-item :index="2" style="background-color: #000000;"> 文档管理</el-menu-item>
      <el-menu-item v-if="$store.state.isAdmin" :index="3" style="background-color: #000000;"> 用户管理</el-menu-item>
      <el-menu-item v-if="$store.state.isAdmin" :index="4" style="background-color: #000000;"> 日志管理</el-menu-item>
    </el-menu>
  </el-aside>

</template>

<script>

import {onMounted, reactive, toRefs} from "vue";
import router from "@/router/router";
import * as $store from "@/store/state";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "LeftMenuNav",
  setup() {
    const state = reactive({
      activeMenu: "1",
      isRed:false,
      menus: [
        {
          index: '1',
          title: '项目管理',
          icon: 'el-icon-menu',
        },
        {
          index: '2',
          title: '文档管理',
          icon: 'el-icon-menu',
        },
        {
          index: '3',
          title: '用户管理',
          icon: 'el-icon-menu',
        },
        {
          index: '4',
          title: '日志管理',
          icon: 'el-icon-menu',
        }
      ],
    });
    const handleMenuSelect = (index) => {
      state.activeMenu = index;
      if (index == '1') {
        router.push('/material_management');
        state.isRed = true;
      } else if (index == '2') {
        router.push('/docx_make');
      } else if (index == '3') {
        router.push('/user_manage');
      } else if (index == '4') {
        router.push('/log_manage');
      }
      // 处理菜单项点击事件
    }
    onMounted(() => {
      console.log($store.state.isAdmin)
    })
    return {
      ...toRefs(state),
      handleMenuSelect,
    };
  },

}
</script>

<style scoped>
/* 在全局样式中设置默认状态下的字体颜色 */
.el-menu-item {
  color: #ffffff;
}

/* 设置选中状态下的字体颜色 */
.el-menu-item.is-active {
  color: #18deae;
}
/* 设置悬停状态下的字体颜色 */
.el-menu-item:hover {
  color: #18deae; /* 例如，将悬停时的字体颜色设置为红色 */
}
</style>