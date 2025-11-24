import { StyleSheet, View, Text } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeB = () => {
  const theme = useContext(ThemeContext)
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.color, fontSize: 30 }}>ABCD</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ThemeB