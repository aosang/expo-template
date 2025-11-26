import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Index() {
  const router = useRouter()

  const sendParams = () => {
    router.navigate({
      pathname: '/course/[id]',
      params: {id: 3}
    })
  }

  return (
    <View style={styles.container}>
      {/* <Stack.Screen 
        options={{ 
          headerTitle: '首页',  
        }} 
      /> */}
      <Text style={styles.title}>这里是首页</Text>

      <TouchableOpacity onPress={sendParams}>
        <Text style={styles.buttonText}>跳转传参（TouchableOpacity）</Text>
      </TouchableOpacity>

      {/* <Link style={styles.link} href="/course/1">
        跳转传参（Link）
      </Link> */}

      {/* <Link style={styles.link} href={{
        pathname: '/course/[id]',
        params: {id: 2}
      }}>
        跳转传参（Link）
      </Link> */}

      {/* navigate跳转 */}
      {/* <TouchableOpacity onPress={() => router.navigate('/details')}>
        <Text style={styles.buttonText}>跳转到详情页</Text>
      </TouchableOpacity> */}

      {/* replace跳转 */}
      {/* <TouchableOpacity onPress={() => router.replace('/details')}>
        <Text style={styles.buttonText}>跳转到详情页</Text>
      </TouchableOpacity> */}

      {/* push跳转 */}
      {/* <TouchableOpacity onPress={() => router.push('/details')}>
        <Text style={styles.buttonText}>跳转到详情页</Text>
      </TouchableOpacity> */}
      

      <Link style={styles.link} href="/teachers/1">
        打开教师页（Modal）
      </Link>
    </View>
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
    color: '#e29447',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
  link: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
})
