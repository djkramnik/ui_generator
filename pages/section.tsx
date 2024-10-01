import { useTheme } from 'styled-components'
import { DashboardSection, Footer, Fullscreen } from '../components/lib/section'
import { RandomBrandLogo } from '../components/lib/super_components/brand'
import {
  CollapsibleMenuItem,
  ListOfLinks,
  Menu,
  MenuItem,
  MenuItemsShortcut,
} from '../components/lib/super_components'
import {
  Anchor,
  Button,
  ChimericIcon,
  Copy,
  Heading,
  Icon,
  Input,
} from '../components/lib/atomics'
import { Box, Flex, ThreeCol, TwoCol } from '../components/lib'
import { sxToStyle } from '../components/theme'
import { DashboardTable } from '../components/lib/super_components/table'
import { getGenericColumns } from '../components/lib/atomics/table'
import { Spacer } from '../components/lib/layout/spacer'

const SectionsGallery = () => {
  const theme = useTheme()
  return (
    <>
      <Fullscreen>
        <Footer>
          <TwoCol widthLeft="20%" growRight
            hGap={theme.spacing.biggishGap}>
            <Box $sx={{
              borderRight: `1px solid white`,
              height: '100%',
              padding: theme.spacing.gap
            }}>
              <Copy $sx={{
                color: 'currentColor'
              }}>Our mission is to
                heal the world, make it a better place,
                for you me and the entire hooman race
              </Copy>
            </Box>
            <Flex jcsa>
              <ListOfLinks
                links={[
                  'News',
                  'Our team',
                  'Help center',
                  'Support community',
                  'Press',
                  'Share your story'
                ]} 
                heading="About"
              />
              <ListOfLinks
                links={[
                  'Help center',
                  'Drug center',
                  'King Lear',
                  'Let chaos take the world',
                  'Ah!',
                  'Let chaos take the world'
                ]} 
                heading="Shabriri"
              />
              <ListOfLinks
                links={[
                  'Video',
                  'Climate',
                ]} 
                heading="Climate"
              />
              <ListOfLinks
                links={[
                  'Religion',
                  'Drink',
                  'Pencil Case'
                ]} 
                heading="Old time"
              />
            </Flex>
          </TwoCol>
          <Spacer />
          <ThreeCol>
            <Box $variant="center">
              A Browser Daemon company
            </Box>
            <Box $variant="center">
              Copyright © 2024 Year of the Rat
            </Box>
            <Box $variant={[
              'center',
              'underline'
            ]}>
              Terms of Service
            </Box>
          </ThreeCol>
        </Footer>
      </Fullscreen>
      <DashboardSection
        navbarShortcutProps={{
          logo: <RandomBrandLogo />,
          links: [['v5.0.0', 'Contact Us', 'Sign in']],
          dropdowns: [[0, 0]],
        }}
        sidebarChildren={
          <Menu>
            <>
              {
                <MenuItemsShortcut
                  items={[
                    { label: 'Play', icon: Icon.gamepad },
                    { label: 'Puzzler', icon: Icon.figma },
                  ]}
                />
              }
              <CollapsibleMenuItem label="Learn" />
              <CollapsibleMenuItem label="Watch" open>
                <MenuItem label="News" icon={Icon.instagram} />
                <MenuItem label="Social" icon={Icon.facebook} />
              </CollapsibleMenuItem>
            </>
            <>
              <Flex col gap={theme.spacing.smallGap}>
                <Input
                  placeholder="Search"
                  $variant={['transparent', 'border', 'white']}
                />
                <Button $variant={['pill', 'transparent', 'border']}>
                  Sign Up
                </Button>
                <Button
                  $variant="pill"
                  $sx={{
                    backgroundColor: theme.palette.secondary,
                  }}
                >
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
                        color: theme.superComponents.menuItemLabel.color,
                      }),
                    }}
                  />
                  <Anchor
                    href="#"
                    $sx={{
                      color: theme.superComponents.menuItemLabel.color,
                    }}
                  >
                    Support
                  </Anchor>
                </Flex>
                <Flex gap={theme.spacing.smallGap} aic>
                  <ChimericIcon
                    icon={Icon.map}
                    iconStyle={{
                      ...sxToStyle({
                        color: theme.superComponents.menuItemLabel.color,
                      }),
                    }}
                  />
                  <Anchor
                    href="#"
                    $sx={{
                      color: theme.superComponents.menuItemLabel.color,
                    }}
                  >
                    English
                  </Anchor>
                </Flex>
              </Flex>
            </>
          </Menu>
        }
      >
        {/* <Toast type="error" message="Error: Hopelessly Delusional Attempt by you" /> */}
        {/* <Toast type="success" message="Glad tidings from New York!" /> */}
        {/* <Toast type="info" message="Note to self: believe no lies" /> */}
        {/* <ProgressOverlay /> */}
        <DashboardTable<object>
          filters={[{
            type: 'input',
            placeholder: 'Name',
            label: 'Name'
          },{
            type: 'checkbox',
            label: 'Executives only',
            value: 'checked'
          }]}
          mui
          heading="This month's earnings"
          tableProps={{
            sort: {
              header: 'Age',
              direction: 'asc',
            },
            noColumnBorder: true,
            alternateColor: '#eee',
            headers: ['Name', 'Position', 'Office', 'Age', 'Start Date'],
            data: [
              {
                name: 'Greg Plates',
                position: 'Lifting Guy',
                office: 'Warehouse',
                age: '20',
                startDate: '10/10/2022',
              },
              {
                name: 'Chris Williamson',
                position: 'CEO',
                office: 'Glass Pavilion',
                age: '29',
                startDate: '8/17/2000',
              },
              {
                name: 'Moldy Residue',
                position: 'Waste Manager',
                office: 'Barone Sanitation',
                age: '44',
                startDate: '12/12/1978',
              },
            ],
            columns: getGenericColumns([
              'name',
              'position',
              'office',
              'age',
              'startDate',
            ]),
          }}
          paginationProps={{}}

        />
      </DashboardSection>
    </>
  )
}

export default SectionsGallery
