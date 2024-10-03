
import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box } from "../layout"
import { Card } from "../super_components"

export const AuthSection = ({
  children,
  background
}: {
  children?: React.ReactNode
  background?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'authContainer',
        theme
      )
    }}>
      <Box $sx={{
      ...getSuperComponentStyles(
        'authOverlay',
        theme
      )
    }}>
      {background}
      </Box>
      <Card cardSx={{
        ...getSuperComponentStyles(
          'authCard',
          theme
        )
      }}>
        {children}
      </Card>
    </Box>
  )
}