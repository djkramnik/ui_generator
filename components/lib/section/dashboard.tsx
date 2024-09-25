import { Navbar } from "../applied"
import { Box, Flex } from "../layout"

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
            <Navbar bgc="teal">
              {navbarChildren}
            </Navbar>
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