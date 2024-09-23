import { createContext } from 'react'
import { themes } from '../styles'
import { Theme } from './theme'

export const ActiveThemeContext = createContext({
  activeTheme: themes['primary'],
  toggleTheme: (activeTheme: Theme) => {},
})
