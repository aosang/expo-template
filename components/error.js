import { SimpleLineIcons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

const Error = (props) => {
  const title = props.title || '抱歉，请求数据错误'

  return (
    <View style={styles.container}>
      <SimpleLineIcons 
        name="exclamation" 
        size={40} 
        color="#F56C6C" 
      />
      <Text style={styles.errorText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 15,
    color: '#555',
    marginTop: 10
  }
})

export default Error