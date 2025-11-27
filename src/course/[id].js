import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProgressWebView from '@/components/progressWebview';

export default function Course() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ProgressWebView
        source={{ uri: `https://www.baidu.com` }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f9df7',
  },
  info: {
    marginTop: 20,
    fontSize: 20,
    color: '#67c1b5',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 20,
    color: '#ff7f6f',
  }
})
