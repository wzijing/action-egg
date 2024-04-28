// 对axios进行二次封装
import axios from "axios"
// post的请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;chartset=UTF-8';
axios.defaults.headers.post['x-requested-with'] = 'XMLHttpRequest';
// 请求超时时间
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true //请求头携带cookie



// 配置请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  // Promise包含一个error方法 返回错误信息
  return Promise.error(error)
})

// 配置响应拦截器
axios.interceptors.response.use((res) => {
  // 过滤一下数据，也就是对数据做统一处理
  if (res.status === 200) { //说明成功返回数据
    return Promise.resolve(res.data) //成功的时候执行resolve函数，返回服务器端返回的数据
  } else {
    return Promise.reject(res.data) //服务器端的数据(失败的数据)
  }
}, (error) => {
  console.log(error);
})

// 定义一个名字为ajax的方法，里面传递三个参数，分别是url地址，发送给服务器端的数据，请求类型
export default function ajax(url = "", params = {}, type = "") {
  let promise;
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() == 'GET') {
      // params['tokens'] = randomCode(20)
      promise = axios({
        url,
        params:params
      })
    } else if (type.toUpperCase() == 'POST') {
      promise = axios({
        method: 'post',
        url,
        data: params,
        // withCredentials: true,
        // headers: {
        //   'Cookie': document.cookie // 设置Cookie头部
        // }
      })
    } else if (type.toUpperCase() == 'PUT') {
      // params['tokens'] = randomCode(20)
      promise = axios({
        method: 'put',
        url,
        data:params
      })
    } else if (type.toUpperCase() == 'DELETE') {
      // params['tokens'] = randomCode(20)
      promise = axios({
        method: 'delete',
        url,
        data:params
      })
    }

    // 当请求成功时执行then()方法
    promise.then((res) => {
      // 成功的时候，调用成功时的回调函数，通知promise对象，请求成功了
      resolve(res)
    }).catch(error => {
      // 失败的时候，执行失败时的回调函数，返回一个错误的信息
      reject(error)
    })
  })
}


