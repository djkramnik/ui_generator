import { useTheme } from 'styled-components'
import { 
  AuthSection,
  DashboardSection,
  Footer,
  Fullscreen,
  LanderCenter,
  LanderTestimonials,
  LanderTwoCol
} from '../components/lib/section'
import { RandomBrandLogo, SocialMediaButtonRow } from '../components/lib/super_components/brand'
import {
  CollapsibleMenuItem,
  CreditCardDetails,
  Headings,
  ListOfLinks,
  Menu,
  MenuItem,
  MenuItemsShortcut,
  MyAvatar,
  PersonDetails
} from '../components/lib/super_components'
import {
  Anchor,
  Button,
  ChimericIcon,
  Copy,
  Dropdown,
  Heading,
  Icon,
  Input,
} from '../components/lib/atomics'
import { Box, Flex, ThreeCol, TwoCol } from '../components/lib'
import { sxToStyle } from '../components/theme'
import { DashboardTable } from '../components/lib/super_components/table'
import { getGenericColumns } from '../components/lib/atomics/table'
import { Spacer } from '../components/lib/layout/spacer'
import { Legalese } from '../components/lib/super_components/legalese'
import { HeroCarousel } from '../components/lib/super_components/carousel'
import { ThemeToggle } from '../components/lib/theme_toggle'

const SectionsGallery = () => {
  const theme = useTheme()
  return (
    <>
      <ThemeToggle />
      <AuthSection background={
        <Box $sx={{
          backgroundColor: theme.palette.grey,
          width: '100%',
          height: '100%'
        }} />
      }>
        <Flex col gap="6px">
          <CreditCardDetails />
          <div style={{ width: 'fit-content'}}>
            <PersonDetails />
          </div>
          <PersonDetails
            middleName='Middle Name'
            prefixOptions={[
              'Mr.',
              'Mrs.',
              'I prefer not to say'
            ]}
            prefixOpen={true}
          />
        </Flex>
      </AuthSection>
      <LanderTestimonials
        bgc="#eee"
        testimonials={[
          [
            {
              asset: 'a.jpg',
              name: 'Seance Lady',
              position: 'High Priestess',
              testimonial: `I talked to the aliens, they are really
              very disappointed with all of us.  The lying, the stealing,
              the killing, the monkeying around.`
            }, {
              asset: 'hulk.jpg',
              name: 'The Tower',
              position: 'Precarious at best',
              testimonial: `All my hopes rest on an outlandish
              weed fuelled fantasy`
            }
          ],
          [{
            asset: 'historian.jpg',
            name: 'Angry boy',
            position: 'Crazy man',
            testimonial: 'Your best weapon against lunatics'
          }, {
            asset: 'hulk.jpg',
            name: 'The Tower',
            position: 'Precarious at best',
            testimonial: `All my hopes rest on an outlandish
            weed fuelled fantasy`
          }],
          [{
            asset: 'historian.jpg',
            name: 'Colosseum',
            position: 'Crazy man',
            testimonial: 'Your best weapon against lunatics'
          },
          {
            asset: 'beetle.jpg',
            name: 'Dev Boi',
            position: 'Slinging hot snippets of React',
            testimonial: `I know you think it is so uncomfortable
            that I won't bring it up`,
            grey: true,
          }]
        ]}
      />
      <LanderTestimonials 
        bgc="#eee"
        testimonials={[
          [{
            asset: 'historian.jpg',
            name: 'Angry boy',
            position: 'Crazy man',
            testimonial: 'Your best weapon against lunatics'
          }, {
            asset: 'hulk.jpg',
            name: 'The Tower',
            position: 'Precarious at best',
            testimonial: `All my hopes rest on an outlandish
            weed fuelled fantasy`
          }],
          [{
            asset: 'historian.jpg',
            name: 'Colosseum',
            position: 'Crazy man',
            testimonial: 'Your best weapon against lunatics'
          },
          {
            asset: 'beetle.jpg',
            name: 'Dev Boi',
            position: 'Slinging hot snippets of React',
            testimonial: `I know you think it is so uncomfortable
            that I won't bring it up`,
            grey: true,
          }]
        ]}
      />
      <LanderCenter
        heading="Err, Kanban ain't mean nuttin to me"
        copy="I've written a couple of few things about
        why I don't want to be estimating story points or organizing work into tickets.
        I just do what I do, feel me???">
        <MyAvatar asset="superman.jpg"
          name="Clark Kent"
          position="Important vital Dave Grrr guy"
        />
      </LanderCenter>
      <HeroCarousel bgi="amazon1.jpg" mui />
      <HeroCarousel>
        <Flex jcc aic col>
          <Heading level={2}>
            Hi Ho
          </Heading>
          <Heading level={4}>
            Buy now! Remorse Later!
          </Heading>
        </Flex>
      </HeroCarousel>
      <LanderTwoCol>
        <Headings
          little="Online and in Person"
          big="Now You're the big guy"
        />
        <Box $sx={{
          backgroundColor: theme.palette.primary,
          aspectRatio: '1',
          width: '80%'
        }}>
        </Box>
      </LanderTwoCol>
      <Fullscreen>
        <Footer>
          <Flex aic $sx={{
            paddingLeft: theme.spacing.gap
          }}>
            <SocialMediaButtonRow icons={[
              'facebook',
              'figma',
              'docker'
            ]} />
          </Flex>
          <Spacer />
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
          <Spacer />
          <Box $sx={{
            paddingLeft: theme.spacing.gap
          }}>
            <Legalese text="There is more danger in the hidden betrayer than the open foe." />
            <Legalese text="If you see me again and I'm not smiling you're not gonna like it" />
            <Legalese text="David Grrrr subconscious is not so nice but I still didn't park in handicap" />
          </Box>
          <Spacer />
          <TwoCol widthRight="20%" growLeft
            hGap={theme.spacing.biggishGap}>
            <Flex jcsa>
              <ListOfLinks
                links={[
                  'Presents',
                  'Ribbons',
                  'Bow',
                  'Gift Wrap',
                  'Cider'
                ]} 
                heading="Christmas"
              />
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
            <Box $sx={{

            }}>
             <Dropdown options={['English']} value="English" />
            </Box>
          </TwoCol>
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
