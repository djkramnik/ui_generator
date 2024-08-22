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