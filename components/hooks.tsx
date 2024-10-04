import { useTheme } from "styled-components"
import { getComponentStyles, getSuperComponentStyles, Theme } from "./theme"

export const useThemeHelper = () => {
  const theme = useTheme()
  return {
    theme,
    hookC: (s: keyof Theme['components']) => {
      return {
        ...getComponentStyles(s, theme)
      }
    },
    hookSc: (s: keyof Theme['superComponents']) => {
      return {
        ...getSuperComponentStyles(s, theme)
      }
    }
  }
}