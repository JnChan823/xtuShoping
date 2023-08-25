/**
 * 添加拦截器：
 * 拦截request请求
 * 拦截uploadFile文件上传
 *
 * TODO:
 *   1.非http开头需拼接地址
 *   2.请求超时
 *   3.添加小程序端请求头标识
 *   4.添加token请求头标识
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    //1.非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //2.请求超时,默认超时60s,先设置为10s
    options.timeout = 10000
    //3.添加小程序端请求头标识
    options.header = {
      //保留自己发出请求时添加的header
      ...options.header,
      //然后再添加source-client
      'source-client': 'miniapp',
    }
    //4.添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    // console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param   UniApp.RequestOptions
 * @returns Promise
 * 1.返回Promise对象
 * 2.请求成功
 *  2.1 提取核心数据 res.data
 *  2.2 添加类型，支持泛型
 * 3.请求失败
 *  3.1 网络错误→提示用户换网络
 *  3.2 401错误→清理用户信息,跳转到登录页
 *  3.3 其他错误→根据后端错误信息提示
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
//2.2 添加类型，支持泛型
export const http = <T>(optoins: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...optoins,
      //2.请求成功
      success(res) {
        //状态码2xx,axios就是这样设计的
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          //提取核心数据 res.data
          /**
           * 在 `resolve(res.data as Data<T>)` 中，`as Data<T>` 是 TypeScript 的类型断言语法。类型断言
           * 是用于告诉编译器某个值的具体类型。在这个例子中，`res.data` 被断言为 `Data<T>` 类型。`Data<T>`
           *  是一个泛型类型，其具体定义可能会在代码其他位置被提供。通过使用 `<T>`，我们可以将 `Data` 类型进
           * 行参数化，以适应不同类型的数据。在这个上下文中，`as Data<T>` 的作用是告诉编译器，`res.data` 是
           * 一个符合 `Data<T>` 类型的值，即将 `res.data` 视为具有 `Data<T>` 类型的数据。这样的类型断言可以
           * 在使用 TypeScript 进行开发时，用于在编译时强制设置变量的类型，以提供更好的类型检查和静态类型推断。
           */
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401错误→清理用户信息,跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          //其他错误→根据后端错误信息提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      /**
       *
       * @param error
       *  3.请求失败
       *  3.1 网络错误→提示用户换网络
       *  3.2 401错误→清理用户信息,跳转到登录页
       *  3.3 其他错误→根据后端错误信息提示
       */
      fail(error) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(error)
      },
    })
  })
}
