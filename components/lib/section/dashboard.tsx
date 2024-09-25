
import { StripeLogo } from "../../svg"
import { Box, Flex } from "../layout"
import { Navbar, NavbarShortcut } from "../super_components"

export const DashboardSection = ({
  sidebarChildren,
  navbarChildren,
  children,
  withNav = true // randomize
}: {
  sidebarChildren?: React.ReactNode
  navbarChildren?: React.ReactNode
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
            <NavbarShortcut
              logo={<StripeLogo fill="#fff" />}
              links={[['About', 'Contact Us', 'Sign in']]}
            />
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