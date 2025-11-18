import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'

import Loading from './components/loading'
import Error from './components/error';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => { 
    try{
      const response = await fetch('https://apis.tianapi.com/guoei/index', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'key=0d5e1bac27e3f341cfaa32170d652c75&num=10'  // 转换为表单格式字符串
      })
  
      const result = await response.json()
      setData(result.result.newslist)
    }catch(error) {
      setError(true)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  if (loading) {
    return <Loading />
  }

  if(error) {
    return <Error title="抱歉，请求数据错误" />
  }

  return (
    <>
      <View style={styles.container}>
        {/* <Button title="Click me" onPress={handleClick} />
        <Text style={styles.title}>{count}</Text> */}
        {data.map((item, index) => (
          <View key={index} style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDesc}>{item.description}</Text>
          </View>
        ))}

        {/* <Button title="Fetch Data" onPress={fetchData} /> */}
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e29447',
  },

  newsItem: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%'
  },

  newsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },

  newsDesc: {
    fontSize: 12,
    color: '#666'
  }
})
