import { styled, useTheme } from 'styled-components'
import {
  CssProps,
  getResponsiveStyles,
  ResponsiveComponent,
  ResponsiveMixin,
  WithTheme,
} from '../../theme'
import { CSSProperties } from 'react'
import { Flex, FlexProps } from '../layout'
import { Copy } from './copy'
import { Button as MuiButton } from '@mui/material'
import { getComponentStyles, mergeStyles, sxToStyle } from "../../theme/variants"
import { ChimericIcon, Icon } from './icon'

export type ButtonProps = WithTheme<ResponsiveComponent<'button'>>

// the default styles I include in button should later get ported to theme under theme.component.button
export const Button = styled('button')<ButtonProps>`
  ${({ theme, $variant, $sx }: ButtonProps) => {
    const diff = mergeStyles({
      theme,
      component: 'button',
      $variant,
    })

    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericButton = (
  props: Omit<ButtonProps, 'theme'> & {
    mui?: boolean
  }
) => {
  const theme = useTheme()
  const { children, $sx, mui, $variant, ...rest } = props
  if (mui) {
    const diff = mergeStyles({
      theme,
      component: 'button',
      $variant,
    })
    return (
      <MuiButton
        style={{
          ...sxToStyle(diff),
          ...sxToStyle($sx ?? {}),
          ...rest.style,
        }}
      >
        {children}
      </MuiButton>
    )
  }
  return (
    <Button $variant={$variant} $sx={$sx} {...rest} theme={theme}>
      {children}
    </Button>
  )
}

type ButtonWithIconProps = {
  text: string
  icon: Icon
  bgc?: ResponsiveMixin
  p?: ResponsiveMixin
  c?: ResponsiveMixin
  $sx?: ButtonProps['$sx']
  $variant?: ButtonProps['$variant']
  iconStyle?: CSSProperties
  flexProps?: FlexProps
  iconPos?: 'start' | 'end'
}

export const ButtonWithIcon = ({
  text,
  icon,
  $sx,
  $variant,
  iconStyle,
  flexProps,
  iconPos = 'end'
}: ButtonWithIconProps) => {
  const theme = useTheme()
  return (
    <Button
      $variant={$variant}
      $sx={{
        ...getComponentStyles('buttonWithIconButton', theme),
        ...$sx,
      }}
    >
      <Flex aic jcc {...flexProps}
        $sx={{ 
          ...getComponentStyles('buttonWithIconLayout', theme),
          ...(iconPos === 'start' ? {
            flexDirection: 'row-reverse'
          } : {}),
          ...flexProps?.$sx
        }}>
        <span style={{ position: 'relative', top: '-1px'}}>{text}</span>
        <ChimericIcon
          icon={icon}
          iconStyle={{
            ...sxToStyle({
              ...getComponentStyles('buttonWithIconIcon', theme),
            }),
            ...iconStyle,
          }}
        />
      </Flex>
    </Button>
  )
}

export const ChimericButtonWithIcon = (
  props: ButtonWithIconProps & {
    mui?: boolean
  }
) => {
  const theme = useTheme()
  const Icon = () => (
    <ChimericIcon
      mui={mui === true}
      icon={props.icon}
      iconStyle={{
        ...sxToStyle({
          ...getComponentStyles('buttonWithIconIcon', theme),
        }),
        ...props.iconStyle,
      }}
    />
  )
  const { text, mui, $sx, $variant, iconPos, ...rest } = props

  if (mui) {
    const diff = mergeStyles({
      theme,
      component: 'button',
      $variant,
    })
    return (
      <MuiButton
        {
          ...iconPos === 'start'
            ? {
              startIcon: <Icon />
            }
            : {
              endIcon: <Icon />
            }
        }
        style={{
          ...sxToStyle({
            ...diff,
            ...getComponentStyles('buttonWithIconButton', theme),
            ...($sx ?? {}),
          }),
        }}
      >
        {text}
      </MuiButton>
    )
  }
  return (
    <ButtonWithIcon
      text={text}
      $sx={$sx}
      $variant={$variant}
      iconPos={iconPos}
      {...rest}
    />
  )
}

export const IconButton = ({
  icon,
  text,
  rev,
  iconStyle,
  textSx,
  containerSx,
  mui,
}: {
  icon: Icon
  text: string
  rev?: boolean
  iconStyle?: CSSProperties
  textSx?: CssProps
  containerSx?: CssProps
  mui?: boolean
}) => {
  const theme = useTheme()
  return (
    <Button $variant="transparent" $sx={{
      ...getComponentStyles('iconButtonContainer', theme),
      ...containerSx,
    }}>
      <Flex
        aic
        jcsb
        {...(rev ? { colrev: true } : { col: true })}
        $sx={{
          ...getComponentStyles('iconButtonInner', theme),
        }}
      >
        {
          <ChimericIcon
            mui={mui === true}
            icon={icon}
            iconStyle={{
              ...sxToStyle(getComponentStyles('iconButtonIcon', theme)),
              ...iconStyle,
            }}
          />
        }
        <Copy $sx={textSx}>{text}</Copy>
      </Flex>
    </Button>
  )
}
