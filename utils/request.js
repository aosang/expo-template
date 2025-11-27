import urlcat from 'urlcat'
import Constants from 'expo-constants'

/** 
  * 基础请求函数
  * @param { string } url - 请求URL
  * @param { object } [options] - 请求配置项
  * @param { string } [options.method='GET'] - HTTP方法
  * @param {object} [options.params] - URL 查询参数（如 { page: 1, limit: 10 }）
  * @param {object} [options.body] - 请求体数据
  * @returns {Promise<object>} 返回解析后的JSON数据
  
  * @example
  * //基础调用示例
  * request('/articles').then(data => console.log(data))
  * 
  
  * @example
  * //带查询参数的调用
  * request('/articles', { params: { page: 1, limit: 10 } }).then(data => console.log(data))
  * 
  * @example
  * //带请求体的调用
  * request('/articles', { params: {page: 1, limit: 10 }})
  * 
  * @example
  * // post请求
  * // 提交表单数据
  * request('auth/sign_in', {
  *  method: 'POST',
  *  body: {login: 'user', password: '123456'}
  * })
  
**/

// 将key设置为固定参数（优先使用环境变量，缺省用你的固定key）
// const API_KEY = process.env.EXPO_PUBLIC_API_KEY 

const request = async (url, {method = "GET", params, body} = {}) => { 
  // 完整的接口地址
  const apiUrl = Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL || process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000'
  // 在原有 params 基础上，统一附加 key 作为查询参数
  const mergedParams = { ...(params || {}) }
  const requestUrl = urlcat(apiUrl, url, mergedParams)

  // 请求头
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //待完成： 传递token
  }

  const config = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) })
  }

  const response = await fetch(requestUrl, config)

  if (!response.ok) {
    // 待完成，登录超时处理

    const { message, errors } = await response.json().catch(() => null)
    const error = new Error(message)
    error.status = response.status
    error.errors = errors
    throw error
  }

  return await response.json()
}

export default request

// 封装语义化请求函数
export const get = (url, params) => request(url, { method: 'GET', params })
export const post = (url, body) => request(url, { method: 'POST', body })
export const put = (url, body) => request(url, { method: 'PUT', body })
export const patch = (url, body) => request(url, { method: 'PATCH', body })
export const del = (url) => request(url, { method: 'DELETE' })
