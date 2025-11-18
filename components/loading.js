import { ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
  return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
}


const styles = StyleSheet.create({
  loading: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export default Loading