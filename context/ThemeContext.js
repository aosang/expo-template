import { createContext } from 'react'

const themes = {
  light: {
    backgroundColor: '#fff',
    color: '#000'
  },

  dark: {
    backgroundColor: '#000',
    color: '#fff'
  }
}

const ThemeContext = createContext(themes.light)

export { ThemeContext, themes }

