import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <>
      <Stack.Screen options={{
      headerTitle: '搜索',
      headerBackTitle: '返回',
      }} />
      <View style={styles.container}>
        <Text style={styles.title}>这里是搜索页</Text>
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
  },
  
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f9df7',
  }
})
