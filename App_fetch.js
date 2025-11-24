import { StyleSheet, Text, View } from 'react-native'
import useFetchData from './hooks/useFetchData'

import Loading from './components/loading'
import Error from './components/error'

export default function App() {
  const { data, loading, error, onReload } = useFetchData('guonei/index', 
    { 
      num: 10 
    })
  
  if (loading) {
    return <Loading />
  }

  if(error) {
    return <Error title="抱歉，请求数据错误" onReload={onReload} />
  }

  return (
    <>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDesc}>{item.description}</Text>
          </View>
        ))}
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
