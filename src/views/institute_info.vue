<template>
  <div class="container">

    <!-- 地图、人物构成、科研进展 -->
    <div class="cascader">
      <el-cascader v-model="selectedValue" :options="options" @change="handleChange" placeholder="请选择"
        style="width: 500px;"></el-cascader>

      <el-button type="primary" icon="Lightning" @click="handleChange" style="width:180px;margin-left: 20px;">
        搜索
      </el-button>
    </div>

    <div class="component">
      <!-- <baidu-map class="bm-view" :zoom="12" :center="{ lng: 116.404, lat: 39.915 }"></baidu-map> -->
      <baidu-map id="map" class="map" :center="centerPoint" :zoom="17" :scroll-wheel-zoom="true" @ready="handler"
        @click="getPoint">
        <bm-marker v-for="marker in markerArr" :key="marker.id" :position="marker" animation="BMAP_ANIMATION_BOUNCE" />
        <bm-info-window :position="info_win_point" :show="infoWindow.show" @close="infoWindowClose"
          @open="infoWindowOpen" @click="infoWindowSwitch">
          <a :href="infoWindow.name_link">
            <p v-text="infoWindow.level_1_name"></p>
          </a>
          <p v-text="infoWindow.level_2_name"></p>
          <p v-text="infoWindow.level_1_addr"></p>
          <a :href="infoWindow.intro_link">
            <p>简介</p>
          </a>
          <!-- <button @click="clear">Clear</button> -->
        </bm-info-window>
      </baidu-map>
    </div>


    <!-- 科研进展 -->
    <div>科研进展</div>
    <div class="image_div">
      <img :src="img_url" />
    </div>

    <!-- 关键词的频率 -->
    <div>通过检索关键词返回分院名称和关键词的频率</div>
    <div>
      <div style="margin: 20px 0;">
        <el-input v-model="keyword" style="width: 240px" placeholder="Please input keyword" />
        <el-button type="primary" icon="Lightning" @click="search_keyword_btn" style="width:180px;margin-left: 20px;">
          搜索
        </el-button>
      </div>
      <div class="kc_container">
        <li v-for="(item, index) in keyword_frequency" :key="index" style="list-style-type:none;margin: 5px;">
          {{ Object.keys(item)[0] }}: {{ Object.values(item)[0] }}
        </li>
      </div>
    </div>

    <div style="margin-top: 20px;">领导信息</div>
    <div class="leader_container">
      <div v-for="(item, index) in leader_list" :key="index"
        style="display: block;margin: 10px;border: wheat solid 1px;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
        <div style="text-align: center;">
          <img :src="item.img" />
        </div>
        <div style="text-align: center;">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div>
      <div>人员组成</div>
      <div style="border: greenyellow solid 2px;margin: 20px 0;padding:5px 0;"><p v-text="personnel_composition" style="font-size: medium;color: #606266;"></p></div>
    </div>
  </div>
</template>
<!-- <script src="http://api.map.baidu.com/api?v=3.0&ak=CT6AIpo9QFI3tbPqOdwk50GM1Dth8pvI"></script>
<script>
var map = new BMap.Map("container"); 
var point = new BMap.Point(116.404, 39.915); 
map.centerAndZoom(point, 15);  
window.setTimeout(function(){  
    map.panTo(new BMap.Point(116.409, 39.918));    
}, 2000);
</script> -->
<script>
import {
  toRefs,
  reactive,
  onMounted,

} from 'vue';
import { ElMessage } from "element-plus";
import { institute_two, get_yjs_jdwd, get_scientific_research_progress, get_keyword_frequency, get_leaders_info,get_personnel_composition } from "@/request/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'institute_info',
  // eslint-disable-next-line vue/no-unused-components
  components: { ElMessage, },
  props: {},
  setup() {
    const state = reactive({
      selectedValue: [],
      options: [],
      centerPoint: {
        lng: 0,
        lat: 0,
      },
      markerArr: [
        // {
        //   id: 0,
        //   lng: 114.412599,
        //   lat: 23.079404,
        // },
      ],
      markerPoint: {},
      img_url: '',
      keyword: '',
      keyword_frequency: [],
      infoWindow: {
        show: true,
        level_1_name: 'level_1_name',
        level_2_name: 'level_2_name',
        level_1_addr: 'level_1_addr',
        name_link: 'name_link',
        intro_link: 'intro_link',
      },
      info_win_point: {
        lng: 0,
        lat: 0,
      },
      leader_list: [],
      personnel_composition: '',
    });

    onMounted(() => {
      get_institute_two_btn();
    });

    const get_institute_two_btn = () => {
      institute_two().then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            state.options = res.data;
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            console.log(res.data)


          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);

        }
      });
    };

    const search_keyword_btn = () => {
      get_keyword_frequency({ 'keyword': state.keyword }).then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            state.keyword_frequency = res.data;
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            console.log(res.data)


          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);

        }
      });
    };

    const handleChange = (value) => {
      console.log('Selected value:', value);

      get_yjs_jdwd(value).then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            console.log(res.data);
            state.centerPoint.lng = res.data.jd;
            state.centerPoint.lat = res.data.wd;

            let id = new Date().getTime() + parseInt(Math.random() * 10000);

            // 新增一个marker标记
            state.markerArr.push({
              id: id,
              lng: res.data.jd,
              lat: res.data.wd,
            });
            state.info_win_point.lng = res.data.jd;
            state.info_win_point.lat = res.data.wd;

            state.infoWindow.level_1_name = res.data.level_1_name
            state.infoWindow.level_2_name = res.data.level_2_name
            state.infoWindow.level_1_addr = res.data.level_1_addr;
            state.infoWindow.name_link = res.data.level_1_name_link;
            state.infoWindow.intro_link = res.data.level_1_intro_link;

            // //给标记点添加信息窗口
            // var opts = {
            //   width: 200,
            //   height: 100,
            //   title: '故宫博物院'
            // };
            // var infoWindow = new BMapGL.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', opts);
            // var point = new BMapGL.Point(res.data.jd, res.data.wd);
            // var marker = new BMapGL.Marker(point);
            // // 点标记添加点击事件
            // marker.addEventListener('click', function () {
            //   map.openInfoWindow(infoWindow, point); // 开启信息窗口
            // });

            // state.markerArr.push(marker);

          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);
          // ElMessage.error("数据获取失败");
        }
      });

      get_scientific_research_progress(value).then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            state.img_url = 'data:image/png;base64,' + res.data;

          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);
          // ElMessage.error("数据获取失败");
        }
      });

      get_leaders_info(value).then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            // state.img_url = 'data:image/png;base64,' + res.data;
            state.leader_list = res.data;
            console.log('leader_list', state.leader_list);
          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);
          // ElMessage.error("数据获取失败");
        }
      });

      get_personnel_composition(value).then((res) => {
        console.log(111111111111111);
        if (res) {
          if (res.code == 200) {
            // ElMessage.error(res.data);
            console.log(2222222222222222);
            // state.img_url = 'data:image/png;base64,' + res.data;
            state.personnel_composition = res.data;
          } else {
            // ElMessage.error(res.data);
            console.log(3333333333333333333);
          }
        } else {
          // console.log(2222222,res);
          console.log(44444444444444444);
          // ElMessage.error("数据获取失败");
        }
      });

    };

    const handler = () => {
      state.centerPoint.lng = 114.412599;
      state.centerPoint.lat = 23.079404;
    };
    const getPoint = (e) => {
      // 点击获取point经纬度
      const { lng, lat } = e.point;
      console.log("当前点击坐标：", lng, lat)
      // 获取一个随机不重复的字符串做为id
      // let id = new Date().getTime() + parseInt(Math.random() * 10000);

      // 新增一个marker标记
      // state.markerArr.push({
      //   id: id,
      //   lng: lng,
      //   lat: lat,
      // });
    };
    const infoWindowClose = () => {
      // state.infoWindow.show = false
    };
    const infoWindowOpen = () => {
      state.infoWindow.show = true
    };
    const clear = () => {
      state.infoWindow.contents = ''
    };
    const infoWindowSwitch = () => {
      state.infoWindow.show = !state.infoWindow.show;
    };

    return {
      ...toRefs(state),
      get_institute_two_btn,
      handleChange,
      handler,
      getPoint,
      search_keyword_btn,
      infoWindowClose,
      infoWindowOpen,
      clear,
      infoWindowSwitch,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/bg.jpg");
}

.loginform {
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 360px;

  border: 2px solid rgba(239, 241, 240, 0.07);
  padding: 15px;

  backdrop-filter: blur(45px);
  /* 调整模糊程度，5px是示例值 */
}

.elloginform {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.container {
  padding: 20px;
}

.cascader {}

.bm-view {
  width: 100%;
  height: 600px;
}

.component {
  margin: 20px 0;
  width: 50%;
  height: 600px;

  .map {
    width: 100%;
    height: 600px;
  }
}

.image_div {
  width: 500px;
  height: 400px;
  margin: 20px 0;

  img {
    width: 100%;
    height: 100%;
    border: greenyellow solid 2px;
    border-radius: 5px;
    object-fit: scale-down;
  }
}

.kc_container {
  border: greenyellow solid 2px;
  min-height: 100px;
}

.leader_container {
  display: flex;
  margin: 20px 0;
  border: greenyellow solid 2px;
  img{
    width: 100%;
    height: 100px;
    object-fit: scale-down;
  }
}
</style>









<!--<template>-->
<!--  <div class="login-container">-->
<!--    <el-form ref="loginForm" v-model="loginForm"  label-width="80px" class="login-form">-->
<!--      <el-form-item label="用户名" prop="username">-->
<!--        <el-input v-model="loginForm.username" placeholder="Username"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="password">-->
<!--        <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="confirm_login">登录</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {reactive, toRefs} from 'vue';-->
<!--import { useRouter } from 'vue-router'-->
<!--import {ElForm, ElFormItem, ElInput, ElButton, ElMessage} from 'element-plus';-->


<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  'name':'login',-->
<!--  components: {-->
<!--    ElForm,-->
<!--    ElFormItem,-->
<!--    ElInput,-->
<!--    ElButton,-->
<!--  },-->
<!--  setup() {-->
<!--    const router = useRouter();-->
<!--    const loginForm =reactive({-->
<!--      username: '',-->
<!--      password: '',-->
<!--    });-->

<!--    // const rules = {-->
<!--    //   username: [-->
<!--    //     { required: true, message: 'Please enter your username', trigger: 'blur' },-->
<!--    //   ],-->
<!--    //   password: [-->
<!--    //     { required: true, message: 'Please enter your password', trigger: 'blur' },-->
<!--    //   ],-->
<!--    // };-->

<!--    const confirm_login = () => {-->
<!--      // 在这里执行登录操作，可以发送用户名和密码到服务器进行验证-->
<!--      // 请确保在实际应用中添加适当的安全性和错误处理-->
<!--      console.log('Username:', loginForm.value.username);-->
<!--      console.log('Password:', loginForm.value.password);-->

<!--      if(loginForm.value.username=='admin' && loginForm.value.username=='123456'){-->
<!--        // 清空表单字段-->
<!--        loginForm.value.username = '';-->
<!--        loginForm.value.password = '';-->
<!--        router.push({path: "/material_management"});-->
<!--      }else{-->
<!--        // 清空表单字段-->
<!--        loginForm.value.username = '';-->
<!--        loginForm.value.password = '';-->
<!--        ElMessage.error('用户名或密码输入有误！')-->
<!--      }-->
<!--    };-->

<!--    return {-->
<!--      ...toRefs(loginForm),-->
<!--      confirm_login,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.login-container {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  height: 100vh;-->
<!--}-->

<!--.login-form {-->
<!--  width: 300px;-->
<!--  padding: 20px;-->
<!--}-->
<!--</style>-->
