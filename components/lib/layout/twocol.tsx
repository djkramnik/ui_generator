import { ResponsiveMixin } from "../../theme"
import { Flex } from "./flex"

export const TwoCol = ({
  widthLeft = 'auto',
  widthRight = 'auto',
  growLeft,
  growRight,
  hGap,
  children,
  halvsies,
}: {
  hGap?: ResponsiveMixin
  widthLeft?: ResponsiveMixin
  widthRight?: ResponsiveMixin
  growLeft?: boolean
  growRight?: boolean
  halvsies?: boolean
  children: [React.ReactNode, React.ReactNode]
}) => {
  return (
    <Flex row $sx={{ gap: hGap, alignItems: 'stretch' }}>
      <Flex col $sx={{ 
        width: (halvsies ? '50%' : widthLeft),
        flexGrow: growLeft ? '1' : '0'
      }}>
        {children[0] ?? null}
      </Flex>
      <Flex col $sx={{ 
        width: (halvsies ? '50%' : widthRight),
        flexGrow: growRight ? '1' : '0',
      }}>
        {children[1] ?? null}
      </Flex>
    </Flex>
  )
}