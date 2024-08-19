import { useCallback, useContext } from "react";
import { ActiveThemeContext } from "../active_theme";

export const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ActiveThemeContext)
  const handleClick = useCallback(() => {
    toggleTheme(activeTheme === 'primary' ? 'alt' : 'primary')
  }, [activeTheme, toggleTheme])
  
  return (
    <div style={{
      position: 'fixed',
      top: '0',
      right: '0',
    }}>
      <button onClick={handleClick}>
        Toggle Theme
      </button>
    </div>
  )
}