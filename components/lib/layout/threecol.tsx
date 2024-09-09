import { CssProps, ResponsiveMixin } from "../../theme"
import { Flex } from "./flex"

export type ThreeColProps = {
  hGap?: string
  vGap?: string
  colPadding?: [ResponsiveMixin, ResponsiveMixin, ResponsiveMixin]
  w?: [ResponsiveMixin, ResponsiveMixin, ResponsiveMixin],
  colSx?: [CssProps, CssProps, CssProps],
  children: [React.ReactNode, React.ReactNode, React.ReactNode]
}

export const ThreeCol = ({
  hGap = '12px',
  vGap = '12px',
  colPadding,
  w,
  colSx,
  children,
}: ThreeColProps) => {
  return (
    <Flex row $sx={{ gap: hGap, alignItems: 'stretch' }}>
      <Flex col $sx={{ 
        width: w?.[0] ?? '33%',
        padding: colPadding?.[0],
        gap: vGap,
        ...(colSx?.[0])
        }}>
        {children[0] ?? null}
      </Flex>
      <Flex col $sx={{ 
        width: w?.[1] ?? '33%',
        padding: colPadding?.[1],
        gap: vGap,
        ...(colSx?.[1])
        }}>
        {children[1] ?? null}
      </Flex>
      <Flex col $sx={{
        width: w?.[2] ?? '33%',
        padding: colPadding?.[2],
        gap: vGap,
        ...(colSx?.[2])
        }}>
        {children[2] ?? null}
      </Flex>
    </Flex>
  )
}