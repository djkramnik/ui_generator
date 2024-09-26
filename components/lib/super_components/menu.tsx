import { useTheme } from "styled-components"
import { Box, Flex } from "../layout"
import { getComponentStyles, getSuperComponentStyles, sxToStyle } from "../../theme"
import { ChimericIcon, Copy, Icon } from "../atomics"
import React from "react"

// agnostic of being used in a sidenav or not, ok?
export const Menu = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles('menu', theme),
    }}>
      {
        React.Children.map(children, (child) => {
          return (
            <Box $sx={{
              ...getSuperComponentStyles('menuItemGroup', theme)
            }}>
              {child}
            </Box>
          )
        })
      }
    </Flex>
  )
}

export const MenuItem = ({
  label,
  icon,
}: {
  label: string
  icon?: Icon
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles('menuItem', theme)
    }}>
      {icon
        ? (
          <Box $sx={{
            ...getSuperComponentStyles('menuItemIconContainer', theme)
          }}>
            <ChimericIcon icon={icon} 
              iconStyle={{
                ...sxToStyle({
                  ...getSuperComponentStyles('menuItemIcon', theme)
                })
              }}
            />
          </Box>
        )
        : null
      }
      <Copy $sx={{
        ...getSuperComponentStyles('menuItemLabel', theme),
      }}>
        {label}
      </Copy>
    </Flex>
  )
}

export const MenuItemsShortcut = ({
  items
}: {
  items: { label: string, icon?: Icon }[]
}) => {
  return (
    <>
      {
        items.map((item, index) => {
          return <MenuItem key={index} {...item} />
        })
      }
    </>
  )
}