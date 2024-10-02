import { useTheme } from 'styled-components'
import {
  CssProps,
  getSuperComponentStyles,
  ResponsiveMixin,
  sxToStyle,
  Theme,
} from '../../theme'
import { Overlay } from '../atomics/position/overlay'
import { Box } from '../layout'
import { ChimericIcon, Icon } from '../atomics'

const IconHorizontal = ({
  icon,
  theme,
  mui,
}: {
  icon: Icon
  theme: Theme
  mui?: boolean
}) => {
  return (
    <Box
      $sx={{
        ...getSuperComponentStyles('carouselIconHorizontal', theme),
      }}
    >
      <ChimericIcon
        mui={mui === true}
        icon={icon}
        iconStyle={{
          ...sxToStyle({
            ...getSuperComponentStyles('carouselIcon', theme),
          }),
        }}
      />
    </Box>
  )
}

const IconVertical = ({
  icon,
  theme,
  mui,
}: {
  icon: Icon
  theme: Theme
  mui?: boolean
}) => {
  return (
    <Box
      $sx={{
        ...getSuperComponentStyles('carouselIconVertical', theme),
      }}
    >
      <ChimericIcon
        mui={mui === true}
        icon={icon}
        iconStyle={{
          ...sxToStyle({
            ...getSuperComponentStyles('carouselIcon', theme),
          }),
        }}
      />
    </Box>
  )
}

export const HeroCarousel = ({
  bgi,
  children,
  iconLeft = Icon.chevronLeft,
  iconRight = Icon.chevronRight,
  iconTop = Icon.chevronUp,
  iconBottom = Icon.chevronDown,
  horizontal = true,
  vertical,
  mui,
}: {
  bgi?: string
  children?: React.ReactNode
  iconRight?: Icon
  iconLeft?: Icon
  iconTop?: Icon
  iconBottom?: Icon
  horizontal?: boolean
  vertical?: boolean
  mui?: boolean
}) => {
  const theme = useTheme()
  return (
    <Box
      $sx={{
        ...getSuperComponentStyles('carouselContainer', theme),
      }}
    >
      {children}
      <Overlay
        containerSx={{
          ...getSuperComponentStyles('carouselOverlay', theme),
        }}
        {
          ...(bgi
            ? {
                backgroundImage: `url(/backgrounds/${bgi})`,
              }
            : {})
        }
        iconLeft={
          horizontal ? <IconHorizontal mui={mui} icon={iconLeft} theme={theme} /> : null
        }
        iconRight={
          horizontal ? <IconHorizontal mui={mui} icon={iconRight} theme={theme} /> : null
        }
        iconTop={
          vertical ? <IconVertical mui={mui} icon={iconTop} theme={theme} /> : null
        }
        iconBottom={
          vertical ? <IconVertical mui={mui} icon={iconBottom} theme={theme} /> : null
        }
      />
    </Box>
  )
}
