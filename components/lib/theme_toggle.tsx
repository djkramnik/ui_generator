import { useCallback, useContext, useRef, useState } from "react";
import { ActiveThemeContext } from "../active_theme";

export const themeNames = [
  'primary',
  'alt',
  'tertiary',
]

export const ThemeToggle = () => {
  const toggleIndex = useRef(0)
  const { activeTheme, toggleTheme } = useContext(ActiveThemeContext)
  const handleClick = useCallback(() => {
    toggleIndex.current += 1

    toggleTheme(themeNames[toggleIndex.current % themeNames.length])
  }, [activeTheme, toggleTheme])
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      right: '0',
    }}>
      <button onClick={handleClick} style={{
        backgroundImage: `linear-gradient(to bottom, #e4e4e4, #f7f7f7)`,
        border: `1px solid #afafaf`
      }}>
        Toggle Theme
      </button>
    </div>
  )
}