import React, { Children } from 'react'
import { useTheme } from 'styled-components'
import { CssProps, ResponsiveMixin } from '../../theme'
import { Box, BoxProps, Flex, FlexProps } from '../layout'
import { CloseIcon } from '../../svg/common/close'
import { Heading } from '../atomics'

// need anchor with sx....
export const NavbarLink = ({ children }: { children?: React.ReactNode }) => {
  return (
    <a
      href="#"
      style={{
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: '10px',
        color: 'inherit',
      }}
    >
      {children}
    </a>
  )
}

export const NavbarLinks = ({
  children,
  gap,
  wrapChildren,
  $sx = {},
}: {
  children?: React.ReactNode
  gap?: ResponsiveMixin
  wrapChildren?: boolean
  $sx?: CssProps
}) => {
  return (
    <Flex row aic $sx={{ gap: gap ?? '12px', ...$sx }}>
      {wrapChildren
        ? Children.map(children, (child, index) => {
            return <NavbarLink key={index}>{child}</NavbarLink>
          })
        : children}
    </Flex>
  )
}

export const Navbar = ({
  bgc = '#333',
  c = '#e6e6e6',
  w,
  children,
  flexProps,
  boxStyles,
  h,
}: {
  bgc?: ResponsiveMixin
  c?: ResponsiveMixin
  w?: ResponsiveMixin
  children?: React.ReactNode
  flexProps?: FlexProps
  boxStyles?: BoxProps['$sx']
  h?: ResponsiveMixin
}) => {
  const theme = useTheme()
  const width = w ?? theme.spacing?.containerWidth ?? '90%'
  const { $sx, ...rest } = flexProps ?? {}
  return (
    <Box
      $sx={{
        backgroundColor: bgc,
        color: c,
        ...(boxStyles ?? {}),
      }}
    >
      <Flex
        row
        aic
        jcsb
        $sx={{
          width,
          height: h ?? 'auto',
          margin: 'auto',
          fontSize: '15px',
          ...($sx ?? {}),
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  )
}

// collapsible banner under the navbar
export const NavBanner = ({
  c = '#e6e6e6',
  bgc = '#cc0000',
  lineOne,
  lineTwo,
  w,
  p,
  hideClose,
  flexProps,
}: {
  c?: ResponsiveMixin
  bgc?: ResponsiveMixin
  lineOne: React.ReactNode
  lineTwo: React.ReactNode
  w?: ResponsiveMixin
  p?: ResponsiveMixin
  hideClose?: boolean
  flexProps?: FlexProps
}) => {
  const theme = useTheme()
  const width = w ?? theme.spacing?.containerWidth ?? '90%'
  const padding = p ?? '20px 0'
  return (
    <Flex
      row
      aic
      jcsb
      {...flexProps}
      $sx={{
        color: c,
        backgroundColor: bgc,
        padding,
        position: 'relative',
        ...flexProps?.$sx,
      }}
    >
      <Flex col {...flexProps} $sx={{ gap: '12px', width, margin: 'auto', ...flexProps?.$sx }}>
        <Heading level={3} $sx={{ color: 'inherit', fontSize: 'inherit' }}>
          {lineOne}
        </Heading>
        {lineTwo && <p>{lineTwo}</p>}
      </Flex>
      {hideClose !== true ? (
        <CloseIcon
          color="#e6e6e6"
          style={{
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            position: 'absolute',
            top: '6px',
            right: '6px',
          }}
        />
      ) : null}
    </Flex>
  )
}
