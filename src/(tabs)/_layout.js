import { Tabs, Link } from 'expo-router';
import { Image } from 'expo-image';
import { SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
  return <Image style={styles.logo} contentFit="contain" source={require('@/assets/my_logo.png')}/>;
}

/**
 * 导航栏按钮组件
 * @param props
 */
function HeaderButton(props) {
  const { name, ...rest } = props;

  return (
    <Link asChild {...rest} >
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#fff" name={name} />
      </TouchableOpacity>
    </Link>
  );
}

function TabBarIcon(props) {
  return <SimpleLineIcons size={22} {...props} />
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1f99b0',
        headerTitleAlign: 'center',       // 安卓标题栏居中
        headerStyle: {
          backgroundColor: '#e29447'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '400',
          color: '#2a2929',
          fontSize: 16
        },
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => <HeaderButton name="bell" href="/articles" style={styles.headerLeft} />,
        headerRight: () => (
          <>
            <HeaderButton name="magnifier" href="/search" style={styles.headerRight} />
            <HeaderButton name="options" href="/settings" style={styles.headerRight} />
          </>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ 
          title: '发现',
          tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />
        }}
      />
      <Tabs.Screen
        name="video"
        options={{ 
          title: '视频课程',
          tabBarIcon: ({ color }) => <TabBarIcon name="camrecorder" color={color} />
        }}
      />
      <Tabs.Screen
        name="users"
        options={{ 
          title: '我的',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 30,
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  }
})
