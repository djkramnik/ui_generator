
import { useTheme } from "styled-components"
import { Box, Flex } from "../layout"
import { getSuperComponentStyles } from "../../theme"
import { Anchor, Dropdown, Icon } from "../atomics"
import React from "react"
import { ContentFitter } from "../exotic/content-fitter"

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


{/*  */}

// an index to render certain links as dropdowns of the type above,
// later to be randomized
// need icons eventually... :(

export const NavbarShortcut = ({
  links,
  logo,
  dropdowns,
}: {
  logo: React.ReactNode
  links: string[][]
  dropdowns?: [number, number][]
}) => {
  const theme = useTheme()

  const isDropdown = (row: number, col: number) => {
    if (!dropdowns) {
      return false
    }
    return dropdowns.some(([r,c]) => r === row && c === col)
  }

  return (
    <Navbar>
      <Box $sx={{
        ...getSuperComponentStyles('navbarGroup', theme),
      }}>
        {logo}
      </Box>
      {
        links.map((group, rowIndex) => {
          return (
            <Box key={rowIndex} $sx={{
              ...getSuperComponentStyles('navbarGroup', theme)
            }}>
              {
                group.map((l, colIndex) => {
                  return isDropdown(rowIndex, colIndex)
                    ? (
                      <ContentFitter extraPx={20}>
                        <Dropdown
                          selectSx={{
                            border: 'none',
                            backgroundColor: 'transparent'
                          }}
                          icon={Icon.caretDown}
                          value={'v.5.0.0'}
                          artificial
                          options={['v5.0.0', 'v4.0.0']}
                        />
                      </ContentFitter>
                    ) 
                    : (
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