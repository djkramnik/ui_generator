import { CSSProperties } from "react"
import { ResponsiveComponent, ResponsiveMixin, ResponsiveMixinProps} from "../../theme"
import { Box } from "./box"
import { pick } from "../../utils"

type FlexFlags = {
  jcc: boolean
  jcfe: boolean
  jcsb: boolean
  jcsa: boolean
  aic: boolean
  aife: boolean
  ass: boolean
  row: boolean
  rowrev: boolean
  col: boolean
  colrev: boolean
  wrap: boolean
}

const flagToCss: Record<keyof FlexFlags, [keyof CSSProperties, ResponsiveMixin]> = {
  jcc: ['justifyContent', 'center'],
  jcfe: ['justifyContent', 'flex-end'],
  jcsb: ['justifyContent', 'space-between'],
  jcsa: ['justifyContent', 'space-around'],
  aic: ['alignItems', 'center'],
  aife: ['alignItems', 'flex-end'],
  ass: ['alignSelf', 'stretch'],
  row: ['flexDirection', 'row'],
  rowrev: ['flexDirection', 'row-reverse'],
  col: ['flexDirection', 'column'],
  colrev: ['flexDirection', 'column-reverse'],
  wrap: ['flexWrap', 'wrap']
}

type FlexProps = ResponsiveComponent<'div'> & Partial<FlexFlags>

const shortHand = (flags: Partial<FlexFlags>): ResponsiveMixinProps<CSSProperties> => {
  return Object.entries(flags)
    .reduce((acc, [key, val]) => {
      if (!val) {
        return acc
      }
      const [resolvedProp, value] = flagToCss[key as keyof FlexFlags]

      return {
        ...acc,
        [resolvedProp]: value
      }
    }, {} as ResponsiveMixinProps<CSSProperties>)
}

export const Flex = ({
  $sx,
  ...rest
}: FlexProps) => {
  const flagProps = pick(rest, Object.keys(flagToCss))
  return (
    <Box
      $sx={{
        display: 'flex',
        ...shortHand(flagProps),
        ...$sx,
      }}
      {...rest}
    />
  )
}