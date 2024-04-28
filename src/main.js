import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
const app = createApp(App);
// //element-ui样式引入
// import 'element-ui/lib/theme-chalk/index.css'
// //element-ui文件夹下
// import element from './element-ui/index'
// app.use(element)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(router);
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import store from "@/store";
import BaiduMap from 'vue-baidu-map-3x'
// 在Vue中使用Element UI和中文语言包
// 富文本编辑器
app.use(store)
app.use(VueQuillEditor)
app.use(ElementPlus,{locale:zhCn})
app.use(BaiduMap, {
    ak: 'CT6AIpo9QFI3tbPqOdwk50GM1Dth8pvI',
    v: '3.0',
  })
app.mount('#app')


// 添加全局路由守卫 用于判断是否登录
router.beforeEach((to, from, next) => {
    // next();
    // return true;
    // eslint-disable-next-line no-unreachable
    const NowUrl = to.path;

    if (NowUrl == "/login" ) {
        //  登录页面直接放行
        next();
        return true;
    }
    else {
        next();
        return true;

        // const token = sessionStorage.getItem("token");

        // if (token) {
        //     next();
        //     return true;
        // }
        // else {
        //     router.push({path: "/login"});
        //     return false;
        // }


    }
});
