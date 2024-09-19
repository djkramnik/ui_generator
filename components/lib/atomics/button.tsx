import { styled, useTheme } from 'styled-components'
import {
  getResponsiveStyles,
  ResponsiveComponent,
  ResponsiveMixin,
  WithTheme,
} from '../../theme'
import { CSSProperties } from 'react'
import { Flex, FlexProps } from '../layout'
import { Copy, CopyProps } from './copy'
import { Button as MuiButton } from '@mui/material'
import { getComponentStyles, mergeStyles, sxToStyle } from '../../utils'
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
  icon: string
  bgc?: ResponsiveMixin
  p?: ResponsiveMixin
  c?: ResponsiveMixin
  $sx?: ButtonProps['$sx']
  $variant?: ButtonProps['$variant']
  iconStyle?: CSSProperties
  flexProps?: FlexProps
}

export const ButtonWithIcon = ({
  text,
  icon,
  bgc,
  p,
  c,
  $sx,
  $variant,
  iconStyle,
  flexProps,
}: ButtonWithIconProps) => {
  return (
    <Button
      $variant={$variant}
      $sx={{
        backgroundColor: bgc,
        padding: p,
        color: c,
        ...$sx,
      }}
    >
      <Flex aic jcsb {...flexProps} $sx={{ gap: '20px', ...flexProps?.$sx }}>
        <span>{text}</span>
        <i
          className={`fa-solid fa-${icon}`}
          style={{
            fontSize: '22px',
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
    <i
      className={`fa-solid fa-${props.icon}`}
      style={{
        fontSize: '22px',
        ...props.iconStyle,
      }}
    />
  )
  const { text, mui, $sx, $variant, ...rest } = props

  if (mui) {
    const diff = mergeStyles({
      theme,
      component: 'button',
      $variant,
    })
    return (
      <MuiButton
        startIcon={<Icon />}
        style={{
          ...sxToStyle(diff),
          ...(typeof props.bgc === 'string'
            ? {
                backgroundColor: props.bgc,
              }
            : {}),
          ...(typeof props.p === 'string'
            ? {
                padding: props.p,
              }
            : {}),
          ...(typeof props.c === 'string'
            ? {
                color: props.c,
              }
            : {}),
          ...sxToStyle($sx ?? {}),
        }}
      >
        {text}
      </MuiButton>
    )
  }
  return <ButtonWithIcon text={text} $sx={$sx} $variant={$variant} {...rest} />
}

export const IconButton = ({
  icon,
  text,
  rev,
  iconStyle,
  textSx,
  mui,
}: {
  icon: Icon
  text: string
  rev?: boolean
  iconStyle?: CSSProperties
  textSx?: CopyProps['$sx']
  mui?: boolean
}) => {
  const theme = useTheme()
  return (
    <Button $variant="transparent" $sx={{
      ...getComponentStyles('iconButtonContainer', theme),
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
