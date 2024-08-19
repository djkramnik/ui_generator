import { createContext } from 'react'

export const ActiveThemeContext = createContext({
  activeTheme: 'primary',
  toggleTheme: (activeTheme: string) => {},
})
