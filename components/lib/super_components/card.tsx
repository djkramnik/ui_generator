import { useTheme } from "styled-components"
import { CssProps, getSuperComponentStyles } from "../../theme"
import { Box } from "../layout"

export const Card = ({
  grey,
  children,
  cardSx,
}: {
  grey?: boolean
  children?: React.ReactNode
  cardSx?: CssProps
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'card',
        theme
      ),
      ...cardSx,
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