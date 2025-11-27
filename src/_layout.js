import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

function CloseButton() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.dismiss()}>
      <MaterialCommunityIcons name="close" size={30} color="#1f99b0" />
    </TouchableOpacity>
  )
}

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#e29447' />
      <Stack 
        screenOptions={{
          title: '',
          headerTitleAlign: 'center',
          animation: 'slide_from_right',

          headerStyle: {
            backgroundColor: '#e29447'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
            color: '#2a2929',
            fontSize: 16
          },
          headerBackButtonDisplayMode: 'minimal' //设置返回按钮只显示箭头，不显示文字
        }}
      >
        {/* tabs */}
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />

        <Stack.Screen name='articles/index' options={{title: '通知'}}></Stack.Screen>
        <Stack.Screen name='search/index' options={{title: '搜索'}}></Stack.Screen>
        <Stack.Screen name='settings/index' options={{title: '设置'}}></Stack.Screen>
        <Stack.Screen name='teachers/[id]' options={{
            title: '老师详情',
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerLeft: () => <CloseButton />
          }}
        >
        </Stack.Screen>
      </Stack>
    </>
  )
}

