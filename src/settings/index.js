import { View, Text, StyleSheet, Pressable } from 'react-native';

import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是设置页</Text>

      {/* <Pressable 
        style={styles.cell}
        onPress={() => Linking.openURL('https://www.baidu.com')}
      >
        <Text style={styles.cellText}>打开网站</Text>
      </Pressable> */}

      <Pressable 
        style={styles.cell}
        onPress={async () => await WebBrowser.openBrowserAsync('https://www.baidu.com')}
      >
        <Text style={styles.cellText}>打开网站</Text>
      </Pressable>
    </View>
  );
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

  cell: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },

  cellText: {
    fontSize: 16,
    color: '#333',
  }
})
