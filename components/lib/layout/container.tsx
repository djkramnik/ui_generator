import { useTheme } from "styled-components"
import { Box, BoxProps } from "./box"
import { ResponsiveMixin } from "../../theme"

export const Container = ({
  children,
  w,
  $sx,
}: {
  children?: React.ReactNode
  w?: ResponsiveMixin
  $sx?: BoxProps['$sx']
}) => {
  const theme = useTheme()
  const width = w ?? theme.spacing?.containerWidth ?? '92%'
  return (
    <Box $sx={{ width, margin: 'auto', ...$sx}}>
      {children}
    </Box>
  )
}