import { ResponsiveMixin } from "../../theme"
import { Box } from "./box"

export const Card = ({
  br = '8px',
  p = '12px',
  bgc = '#eee',
  c = '#333',
  children,
}: {
  br?: ResponsiveMixin
  p?: ResponsiveMixin
  bgc?: ResponsiveMixin
  c?: ResponsiveMixin
  children: React.ReactNode
}) => {
  return (
    <Box $sx={{
      borderRadius: br,
      padding: p,
      backgroundColor: bgc,
      color: c,
    }}>
      {children}
    </Box>
  )
}