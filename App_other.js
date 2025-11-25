import { StyleSheet, Switch, Button, Alert, Dimensions, View, Text  } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Image } from 'expo-image'

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const onPressOne = () => {
    Alert.alert('提示信息', '你想干嘛', [{
      text: '确定', onPress: () => {console.log('确认了')} 
    }, {
      text: '取消', onPress: () => {console.log('取消了')} 
    }])
  }

  const { width, height } = Dimensions.get('window')
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* swithc切换 */}
        {/* <Switch onValueChange={toggleSwitch} value={isEnabled}/> */}

        {/* alert */}
        {/* <Button title={'点我一下'} onPress={onPressOne}></Button> */}

        {/* 获取屏幕尺寸 */}
        {/* <View style={styles.container}>
          <Text style={styles.text}>
            屏幕宽度: {width.toFixed(0)}, 高度: {height.toFixed(0)}
          </Text>
        </View> */}

        <View style={styles.container}>
          {/* <Text>Hello World</Text> */}
          <Image source={{uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'}} style={styles.image}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  }
})

