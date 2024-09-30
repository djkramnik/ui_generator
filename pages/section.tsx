import { useTheme } from "styled-components"
import { DashboardSection } from "../components/lib/section"
import { RandomBrandLogo } from "../components/lib/super_components/brand"
import { CollapsibleMenuItem, Menu, MenuItem, MenuItemsShortcut } from "../components/lib/super_components"
import { Anchor, Button, ChimericIcon, Copy, Icon, Input } from "../components/lib/atomics"
import { Flex } from "../components/lib"
import { sxToStyle } from "../components/theme"

const SectionsGallery = () => {
  const theme = useTheme()
  return (
    <DashboardSection
      navbarShortcutProps={{
        logo: <RandomBrandLogo />,
        links: [['v5.0.0', 'Contact Us', 'Sign in']],
        dropdowns: [[0, 0]]
      }}
      sidebarChildren={
        <Menu>
          <>
            {
              <MenuItemsShortcut items={[
                {label: 'Play', icon: Icon.gamepad},
                {label: 'Puzzler', icon: Icon.figma},
              ]} /> 
            }
            <CollapsibleMenuItem label="Learn" />
            <CollapsibleMenuItem label="Watch" open>
              <MenuItem label="News" icon={Icon.instagram} />
              <MenuItem label="Social" icon={Icon.facebook} />
            </CollapsibleMenuItem>
          </>
          <>
            <Flex col gap={theme.spacing.smallGap}>
              <Input placeholder="Search"
                $variant={['transparent', 'border', 'white']}
              />
              <Button $variant={['pill', 'transparent', 'border']}>
                Sign Up
              </Button>
              <Button $variant="pill" $sx={{
                backgroundColor: theme.palette.secondary
              }}>
                Log In
              </Button>
            </Flex>

          </>
          <>
          {/**TODO make this a component in menu.  menu item links or something**/}
            <Flex col gap={theme.spacing.smallGap}>
              <Flex gap={theme.spacing.smallGap} aic>
                <ChimericIcon 
                  icon={Icon.circleExclamation}
                  iconStyle={{
                    ...sxToStyle({
                      color: theme.superComponents.menuItemLabel.color
                    })
                  }}
                />
                <Anchor href="#" $sx={{
                  color: theme.superComponents.menuItemLabel.color
                }}>
                  Support
                </Anchor>
              </Flex>
              <Flex gap={theme.spacing.smallGap} aic>
                <ChimericIcon 
                  icon={Icon.map}
                  iconStyle={{
                    ...sxToStyle({
                      color: theme.superComponents.menuItemLabel.color
                    })
                  }}
                />
                <Anchor href="#" $sx={{
                  color: theme.superComponents.menuItemLabel.color
                }}>
                  English
                </Anchor>
              </Flex>
            </Flex> 
          </>
        </Menu>
      }
      >
      <Copy>dodododo</Copy>
    </DashboardSection>
  )
}

export default SectionsGallery