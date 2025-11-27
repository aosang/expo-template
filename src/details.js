import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Link, useRouter } from "expo-router"

export default function Details() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是详情页</Text>

      <TouchableOpacity onPress={() => router.navigate('/details')}>
        <Text style={styles.buttonText}>再次跳转到详情页</Text>
      </TouchableOpacity>

      {/* <Link href="../" style={styles.backText}>
        返回
      </Link> */}

      <Text style={styles.backText} onPress={() => router.back()}>返回首页</Text>
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
    color: '#4f9df7',
  },

  backText: {
    marginTop: 20,
    fontSize: 20,
    color: '#67c1b5',
  }
})
