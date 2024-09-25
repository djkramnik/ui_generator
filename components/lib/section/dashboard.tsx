
import { StripeLogo } from "../../svg"
import { Box, Flex } from "../layout"
import { Navbar, NavbarShortcut, NavbarShortcutProps } from "../super_components"
import { RandomBrandLogo } from "../super_components/brand"

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
  return (
    <Flex col $sx={{
      height: '100vh',
      width: '100vw'
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
        width: '100%',
        flexGrow: '1',
        alignItems: 'stretch',
        backgroundColor: 'cornsilk'
        }}>
          <Box>
            {sidebarChildren}
          </Box>
          <Box $sx={{
            flexGrow: '1',
            backgroundColor: 'aliceblue'
            }}>
            {children}
          </Box>
      </Flex>
    </Flex>
  )
}