import { StyleSheet, View } from 'react-native'
import ThemeA from './components/themeA'
import { ThemeContext, themes } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <View style={styles.container}>
        <ThemeA />
      </View>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
