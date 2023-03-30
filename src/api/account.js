import http from './axios';



/**
 * 获取首页列表
 */
function getAccount(){
  return new Promise((resolve, reject) => {
    http("get",'/article/home/index').then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  getAccount
}
