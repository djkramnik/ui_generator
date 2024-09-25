
import { useTheme } from "styled-components"
import { Box, Flex } from "../layout"
import { getSuperComponentStyles } from "../../theme"
import { Anchor } from "../atomics"
import React from "react"

export const Navbar = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles('navbar', theme)
    }}>
      <Flex $sx={{
        ...getSuperComponentStyles('navbarInner', theme)
      }}>
        {children}
      </Flex>
    </Box>
  )
}

export const NavbarShortcut = ({
  links,
  logo,
}: {
  logo: React.ReactNode
  links: string[][]
}) => {
  const theme = useTheme()
  return (
    <Navbar>
      <Box $sx={{
        ...getSuperComponentStyles('navbarGroup', theme),
      }}>
        {logo}
      </Box>
      {
        links.map((group, index) => {
          return (
            <Box key={index} $sx={{
              ...getSuperComponentStyles('navbarGroup', theme)
            }}>
              {
                group.map(l => {
                  return (
                    <Anchor href="#" key={l} $sx={{
                      color: theme.palette.button
                    }}>
                      {l}
                    </Anchor>
                  )
                })
              }
            </Box>
          )
        })
      }
    </Navbar>
  )
}