import { CssProps, ResponsiveMixin } from "../../theme"
import { Overlay } from "../atomics/position/overlay"
import { Box } from "../layout"

export const Carousel = ({
  bgi,
  h,
  boxSx,
  overlayContainerSx,
  children,
  iconLeft,
  iconRight,
  iconTop,
  iconBottom,
}: {
  bgi?: ResponsiveMixin
  h?: ResponsiveMixin
  boxSx?: CssProps
  overlayContainerSx?: CssProps
  children?: React.ReactNode
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  iconTop?: React.ReactNode
  iconBottom?: React.ReactNode
}) => {
  return (
    <Box $sx={{
      position: 'relative',
      height: h,
      ...boxSx,
    }}>
      {children}
      <Overlay
        containerSx={overlayContainerSx}
        backgroundImage={bgi}
        iconLeft={iconLeft}
        iconRight={iconRight}
        iconTop={iconTop}
        iconBottom={iconBottom}
      />
    </Box>
  )
}