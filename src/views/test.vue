<template>
<div>
  test
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


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'test',
  // eslint-disable-next-line vue/no-unused-components
  components: { ElMessage, },
  props: {},
  setup() {
    const state = reactive({
      selectedValue: [],
    });

    onMounted(() => {

    });


    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>





