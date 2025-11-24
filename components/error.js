import { SimpleLineIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Error = (props) => {
  const title = props.title || '抱歉，请求数据错误'
  const { onReload } = props

  return (
    <View style={styles.container}>
      <SimpleLineIcons 
        name="exclamation" 
        size={40} 
        color="#F56C6C" 
      />
      <Text style={styles.errorText}>{title}</Text>

      <TouchableOpacity style={styles.reload} onPress={onReload}>
        <Text style={styles.label}>重新加载</Text>
      </TouchableOpacity>
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
  },

  reload: {
    marginTop: 10,
    backgroundColor: '#1f99b0',
    height: 40,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10
  },

  label: {
    color: '#fff',
    lineHeight: 40
  }
})

export default Error