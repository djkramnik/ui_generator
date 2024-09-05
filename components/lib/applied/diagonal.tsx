import { ResponsiveMixin } from "../../theme"
import { Box } from "../layout"

// decorative diagonal thing inspired by stripe
// this works at 1300, I dunno about other screen widths.  it's a hack man.
// also the parent needs to be transparent... 
export const DiagonalSection = ({
  bgc = '#FFC300',
  top = -300,
  skewY = -20,
}: {
  bgc?: ResponsiveMixin
  top?: number
  skewY?: number
}) => {
  return (
    <Box 
      $sx={{
        position: 'absolute',
        top: `${top}px`,
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: bgc,
        zIndex: '-1',
        transform: `skewY(${skewY}deg)`
      }}
    />
  )
}