import { useTheme } from "styled-components"
import { DashboardSection } from "../components/lib/section"
import { RandomBrandLogo } from "../components/lib/super_components/brand"
import { Menu, MenuItem } from "../components/lib/super_components"
import { Anchor, ChimericIcon, Copy, Icon, Input } from "../components/lib/atomics"
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
            <MenuItem label="Play" icon={Icon.gamepad} />
            <MenuItem label="Puzzler" icon={Icon.figma} />
            <MenuItem label="Learn" icon={Icon.docker} />
            <MenuItem label="Watch" icon={Icon.eye} />
            <MenuItem label="News" icon={Icon.instagram} />
            <MenuItem label="Social" icon={Icon.facebook} />
            <MenuItem label="More" icon={Icon.code} />
          </>
          <>
            <Input placeholder="Search"
              $variant={['transparent', 'border', 'white']}
            />
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