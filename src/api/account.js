import service from '../utils/request.js'; //导入接口拦截器

export function getCode(params) {
  console.log('getCode...');
  return service.request({
    url: '/user',
    method: 'get',
    params        // get请求 ES6简便写法
  })
}

export function Login(data) {
  return service.request({
    url: '/login',
    method: 'post',
    data         // post请求 
  })
}

export function Register(data) {
  return service.request({
    url: '/register',
    method: 'post',
    data // post请求 
  })
}

// 有关account功能的api都封装在这个文件，到时候直接在组件中导入相关方法进行使用就行了
// ......