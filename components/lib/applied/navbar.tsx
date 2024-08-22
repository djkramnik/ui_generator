import { Children } from "react"
import { useTheme } from "styled-components"
import { ResponsiveMixin } from "../../theme"
import { Box, Flex, FlexProps } from "../layout"

// need anchor with sx....
export const NavbarLink = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <a href="#" style={{ fontSize: '15px', lineHeight: '10px' }}>
      { children }
    </a>
  )
}

export const NavbarLinks = ({
  children,
  gap,
  wrapChildren
} : {
  children?: React.ReactNode
  gap?: ResponsiveMixin
  wrapChildren?: boolean
}) => {
  return (
    <Flex row aic $sx={{ gap: gap ?? '12px' }}>
      {
        wrapChildren
          ? (
            Children.map(children, (child, index) => {
              return <NavbarLink key={index}>{child}</NavbarLink>
            })
          )
          : children
      }
    </Flex>
  )
}

export const Navbar = ({
  bgc = '#333',
  c = '#e6e6e6',
  w,
  children,
  flexProps,
  h,
}: {
  bgc?: ResponsiveMixin
  c?: ResponsiveMixin
  w?: ResponsiveMixin
  children?: React.ReactNode
  flexProps?: FlexProps
  h?: ResponsiveMixin
}) => {
  const theme = useTheme()
  const width = w ?? theme.spacing?.containerWidth ?? '90%'
  const {$sx, ...rest} = flexProps ?? {}
  return (
    <Box $sx={{ backgroundColor: bgc, color: c }}>
      <Flex row aic jcsb
        $sx={{
          width,
          height: h,
          margin: 'auto',
          fontSize: '15px',
          ...($sx ?? {}) }} {...rest}>
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
}: {
  c?: ResponsiveMixin
  bgc?: ResponsiveMixin
  lineOne: string
  lineTwo: string
}) => {
  
}