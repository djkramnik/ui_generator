import { useTheme } from "styled-components"
import { ResponsiveMixin } from "../../theme"
import { Box } from "./box"

export const Spacer = ({
  h,
}: {
  h?: ResponsiveMixin
}) => {
  const theme = useTheme()
  const height = h ?? theme.spacing?.spacerHeight ?? ['12px', '20px', '40px']
  return <Box $sx={{ height }} />
}