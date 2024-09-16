import { CssProps, ResponsiveMixin } from "../../../theme"
import { Box } from "../../layout"

export const Position = ({
  position = 'absolute',
  tlbr,
  children,
  containerSx,
}: {
  position?: ResponsiveMixin
  children?: React.ReactNode
  tlbr?: {
    top?: ResponsiveMixin
    bottom?: ResponsiveMixin
    left?: ResponsiveMixin
    right?: ResponsiveMixin
  },
  containerSx?: CssProps
}) => {
  return (
    <Box $sx={{
      position,
      ...tlbr,
      ...containerSx
    }}>
      {children}
    </Box>
  )
}