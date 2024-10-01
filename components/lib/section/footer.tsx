import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box } from "../layout"


export const Footer = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'footer',
        theme,
      ),
    }}>
      {children}
    </Box>
  )
}