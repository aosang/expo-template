import { ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
  return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
}


const styles = StyleSheet.create({
  loading: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
  }
})

export default Loading