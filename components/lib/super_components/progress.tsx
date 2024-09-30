import { useTheme } from "styled-components"
import { CssProps, getComponentStyles, sxToStyle } from "../../theme"
import { ChimericIcon, Icon } from "../atomics"
import { Position } from "../atomics/position"

export const Progress = ({
  mui,
  spin = true,
  iconSx,
}: {
  mui?: boolean
  spin?: boolean
  iconSx?: CssProps
}) => {
  return (
    <div className={spin ? 'rotating' : ''} style={{
      margin: 'auto'
    }}>
      <ChimericIcon
        icon={Icon.spinner}
        mui={mui === true}
        iconStyle={{
          ...sxToStyle(iconSx ?? {})
        }}
      />
    </div>
  )
}

export const ProgressOverlay = ({
  mui,
}: {
  mui?: boolean
}) => {
  const theme = useTheme()
  return (
    <Position containerSx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      top: '0',
      left: '0'
    }}>
      <Progress mui={mui} iconSx={{
        ...getComponentStyles('h1', theme),
      }} />
    </Position>
  )
}