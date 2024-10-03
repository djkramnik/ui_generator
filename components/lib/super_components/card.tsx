import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box } from "../layout"

export const Card = ({
  grey,
  children,
}: {
  grey?: boolean
  children?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'card',
        theme
      ),
      ...(
        grey === true 
          ? {
            backgroundColor: 'grey',
            color: '#333'
          }
          : {}
      )
    }}>
      {children}
    </Box>
  )
}