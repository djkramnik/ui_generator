
import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box, Flex } from "../layout"
import { NavbarShortcut, NavbarShortcutProps } from "../super_components"
import { RandomBrandLogo } from "../super_components/brand"

// NEED A RTL VERSION OF THIS PLZ
export const DashboardSection = ({
  sidebarChildren,
  navbarShortcutProps = {
    logo: <RandomBrandLogo fill="#fff" />,
    links: [['About', 'Contact Us', 'Sign in']],
    dropdowns: [[0, 0]]
  },
  children,
  withNav = true // randomize
}: {
  sidebarChildren?: React.ReactNode
  navbarShortcutProps?: NavbarShortcutProps
  children?: React.ReactNode
  withNav?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex col $sx={{
      ...getSuperComponentStyles(
        'dashboardContainer',
        theme,
      )
    }}>
      {
        withNav
          ? (
            <NavbarShortcut {...navbarShortcutProps} />
          )
          : (
            null
          )
      }
      <Flex $sx={{
        ...getSuperComponentStyles(
          'dashboardSubNav',
          theme,
        )
        }}>
          <Box $sx={{
            ...getSuperComponentStyles(
              'sidebarLeft', // TODO: based on prop; sidebarright
              theme,
            )
          }}>
            {sidebarChildren}
          </Box>
          <Box $sx={{
            ...getSuperComponentStyles(
              'dashboardContent',
              theme,
            )
            }}>
            {children}
          </Box>
      </Flex>
    </Flex>
  )
}