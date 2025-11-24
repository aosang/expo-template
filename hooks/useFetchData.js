import { useState, useEffect } from 'react'
import { get } from '../utils/request'

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
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await get(url, params)
      // 提取 result.newslist，如果不存在则使用空数组
      const newslist = response?.result?.newslist || []
      setData(newslist)
    } catch(error) {
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