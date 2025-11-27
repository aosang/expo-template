import { useState, useEffect } from 'react'
import { get } from '@/utils/request'

/**
 * 自定义 Hooks 获取数据
 * @param {string} url - API 请求路径（如 '/articles'）
 * @param params - 查询参数（如 { page: 1, limit: 10 }）
 * @returns {{
  * data: object,
  * loading: boolean,
  * error: boolean,
  * onReload: (function(*=): Promise<void>),
  * }}
**/

const useFetchData = (url, params = {}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await get(url, params)
      // console.log('API Response:', response)
      
      // 如果后端返回 { code, data, message } 格式，使用 response.data
      // 如果直接返回数据对象，使用 response
      const data = response.data || response
      setData(data)
    } catch(error) {
      console.error('Fetch Error:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const onReload = async () => {
    setLoading(true)
    setError(false)
    await fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [url, JSON.stringify(params)])

  return { data, loading, error, setData, onReload }
}

export default useFetchData