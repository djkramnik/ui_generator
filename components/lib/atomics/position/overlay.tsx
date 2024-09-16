import { Position } from "."
import { CssProps, ResponsiveMixin } from "../../../theme"

export const Overlay = ({
  iconRight,
  iconLeft,
  iconTop,
  iconBottom,
  backgroundImage,
  children,
  containerSx,
  spacing,
}: {
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  iconTop?: React.ReactNode
  iconBottom?: React.ReactNode
  backgroundImage?: ResponsiveMixin
  children?: React.ReactNode
  containerSx?: CssProps
  spacing?: ResponsiveMixin
}) => {
  return (
    <Position tlbr={{ top: '0', left: '0'}}
      containerSx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage,
        ...containerSx,
      }}>
      {children}
      <Position tlbr={{
        right: spacing ?? '0'
      }}>
        {iconRight}
      </Position>
      <Position tlbr={{
        left: spacing ?? '0'
      }}>
        {iconLeft}
      </Position>
      <Position tlbr={{
        top: spacing ?? '0'
      }}>
        {iconTop}
      </Position>
      <Position tlbr={{
        bottom: spacing ?? '0'
      }}>
        {iconBottom}
      </Position>
    </Position>
  )
}