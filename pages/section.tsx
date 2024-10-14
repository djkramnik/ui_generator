import {
  AuthSection,
  CookieSection,
  DashboardSection,
  Footer,
  Fullscreen,
  LanderCenter,
  LanderTestimonials,
  LanderTwoCol,
  RandomNewsStory,
  SearchSection,
  StripeTable,
} from '../components/lib/section'
import {
  RandomBrandLogo,
  SocialMediaButtonRow,
} from '../components/lib/super_components/brand'
import {
  AccordionSection,
  AddressDetails,
  AmazonSearchResult,
  CollapsibleMenuItem,
  CreditCardDetails,
  GoogleSearchResult,
  GoogleSearchResultProps,
  Headings,
  ListOfLinks,
  Menu,
  MenuItem,
  MenuItemsShortcut,
  MyAvatar,
  PersonDetails,
  PortraitVideoResult,
  RandomizedForm,
  TableOfContents,
  VideoSearchResult,
  WikiHeading,
  WikiSection,
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
import { useThemeHelper } from '../components/hooks'
import { Container } from '../components/lib/layout/container'
import { genGoogleSearchResults } from '../data'
import { useEffect, useState } from 'react'
import { RandomThreeColNews } from '../components/lib/super_components/news'

const SectionsGallery = () => {
  const { theme, hookSc } = useThemeHelper()
  const [ cookieOpen, setCookieOpen ] = useState<boolean>(true)
  const [googleSearchResults, setGoogleSearchResults] = useState<GoogleSearchResultProps[] | null>(null)
  useEffect(() => {
    if (googleSearchResults !== null) {
      return
    }
    const searchResults = genGoogleSearchResults(6)
    setGoogleSearchResults(searchResults)
  }, [googleSearchResults, setGoogleSearchResults])

  if (!googleSearchResults) {
    return null
  }
  return (
    <>
      <ThemeToggle />
      <DashboardSection
        withNav={false}
        sidebarChildren={<Box $sx={{ width: '150px', height: '100vh'}} />}>
        <StripeTable />
      </DashboardSection>
      <Fullscreen>
        <Container>
          <RandomNewsStory withSocials={true} blackAndWhite={true} />
        </Container>
      </Fullscreen>
      <Container>
        <RandomThreeColNews />
      </Container>
      <Spacer />
      <Box $sx={{}}>
        <Container>
          <Box $sx={{ width: '800px'}}>
            <WikiHeading title="2024 Pont-Sondé Attack" lg>
              <Anchor>[ Edit ]</Anchor>
            </WikiHeading>
          </Box>
          <Spacer />
          <Flex gap={theme.spacing.bigGap}>
            <TableOfContents
              links={[
                [
                  'Background',
                  'Polygamy divides Smith\'s followers',
                  'Destruction of the Naboo Expositor',
                  'Arrest attempt and martial law',
                  'Smith surrenders',
                  'Incarceration at Carthage Jail'
                ],
                [
                  'Attack', 
                  'Injuries to mob members'
                ],
                'Interment',
                'Responsibility and trial',
                'Consequences for the Latter Day Saints movement',
                'See also',
                'Notes',
                'References',
                'Further Reading',
                'External Links'
              ]}
            />
            <Box $sx={{ width: '600px'}}>
              <WikiSection 
                headingProps={{
                  title: 'Joseph Smith\'s last stand',
                }}
                paragraph={`In 1844, in the city of <a>Nauvoo, Illinois</a> where 
                  Smith was mayor, several anti-polygamist Mormons,
                  recently excommunicated from Smith's church,
                  joined together to publish a newspaper called
                  the <a>Nauvoo Expositor.</a> It put out its first and only issue on June 7, 1844.
                  <a><sup>[12]:v6,p.430.</sup></a>
                  Based on sworn statements, the Expositor revealed that
                  Smith practiced polygamy, marrying at least eight other
                  men’s wives, and he had tried to marry the wives of some
                  of the Expositor's publishers.`}
              />
            </Box>
          </Flex>

          
        </Container>
      </Box>
      <Spacer />
      <Spacer />
      <Box $sx={{}}>
        <Container>
          <Flex gap={theme.spacing.gap}>
            <PortraitVideoResult
              asset="short1.jpg"
              title="Did Lifting Stunt Her Growth"
              meta="95M Views"
            />
            <PortraitVideoResult
              asset="short2.jpg"
              title="Dog shower for 99 dollars"
              meta="95M Views"
            />
            <PortraitVideoResult
              asset="short3.jpg"
              title="How little can you move...."
              meta="433K Views"
            />
          </Flex>
        </Container>
      </Box>
      <Spacer />
      <Box $sx={{}}>
        <Container>
          <Flex gap={theme.spacing.gap}>
            <VideoSearchResult
              md={true}
              title=""
              avatar={{
                name: 'Internet Historian',
                position: 'Plumber',
              }}
              description={'gah gah gah gah gah '}
            />
            <VideoSearchResult
              vertical
              md={true}
              title=""
              avatar={{
                name: 'Internet Historian',
                position: 'Plumber',
              }}
              description={''}
            />
          </Flex>

        </Container>
      </Box>
      <Box $sx={{}}>
        <Container>
          <Flex gap={theme.spacing.gap}>
            <VideoSearchResult
              vertical
              sm={true}
              title=""
              avatar={{
                name: 'Internet Historian',
                position: 'Plumber',
              }}
              description={''}
              noDescription
            />
            <VideoSearchResult
              vertical
              sm={true}
              title=""
              avatar={{
                name: 'Internet Historian',
                position: 'Plumber',
              }}
              description={''}
              noDescription
            />
            <VideoSearchResult
              vertical
              sm={true}
              title=""
              avatar={{
                name: 'Internet Historian',
                position: 'Plumber',
              }}
              description={'gah gah gah gah gah '}
              noDescription
            />
          </Flex>

        </Container>
      </Box>
      <Box>
        <CookieSection
          handleClose={() => setCookieOpen(false)}
          open={cookieOpen}
          rigamarole={`This website analyzes your eye movements,
            in order to match it to a database of user eye movements,
            in order to find out your weaknesses so we may destroy you.  Please
            consent to this by blinking.`}
        />
        <DashboardSection
          withNav={false}
          sidebarChildren={<Box $sx={{ width: '150px', height: '100vh'}} />}
        >
            <SearchSection
              interludes={[
                (
                  <Flex col gap={theme.spacing.gap}>
                    <Heading level={4}>
                      People also ask
                    </Heading>
                    <AccordionSection
                      openText={`It hydrates, refreshes and cleanses
                        your pores, using Nissan's triple safety protocol`}
                      openIndex={0}
                      accordions={[{
                        heading: 'What does Tongkat Ali do for a man?'
                      }, {
                        heading: 'Will I become superman taking this?'
                      }, {
                        heading: 'Is this the silver bullet to give me unlimited satisfaction?'
                      }, {
                        heading: 'Can I do it if I put my back into it?'
                      }]}
                    />
                  </Flex>
                )
              ]}>
              {
                (googleSearchResults ?? []).map((props, index) => {
                  return <GoogleSearchResult {...props} key={index} />
                })
              }
            </SearchSection>
        </DashboardSection>
      </Box>
      <Box>
        <Container>
          <GoogleSearchResult
            avatar={{
              name: 'Merriam-Webster',
              position: 'https://www.merriam-webster.com > dictionary > test'
            }}
            heading="Test Definition & Meaning"
            description={`Sep 23, 2024 — Kids Definition · 
              1 of 3 noun. ˈtest. 1. : a means of finding out the nature, quality, or value of something. put the new car to the test. 2. : ...`}
            tags={[
              'Synonyms of test',
              'Litmus test',
              'Bechdel test',
              'Acid test'
            ]}
          />
        </Container>
      </Box>
      <Box>
        <Container>
          <Spacer />
          <Flex gap="8px" $sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
            <AmazonSearchResult
              sm={true}
              productInfo={{
                title: "Host Defense Stamets Mushroom Power Roar Capsules",
                tags: ['Medicinal', 'Voodoo', 'Fear'],
                star: {
                  rating: 4,
                  reviews: 88
                },
                price: 23.96,
              }}
            />
            <AmazonSearchResult
              sm={true}
              productInfo={{
                title: "Host Defense Stamets Mushroom Power Roar Capsules",
                tags: ['Medicinal', 'Voodoo', 'Fear'],
                star: {
                  rating: 4,
                  reviews: 88
                },
                price: 23.96,
              }}
            />
            <AmazonSearchResult
              sm={true}
              productInfo={{
                title: "Host Defense Stamets Mushroom Power Roar Capsules",
                tags: ['Medicinal', 'Voodoo', 'Fear'],
                star: {
                  rating: 4,
                  reviews: 88
                },
                price: 23.96,
              }}
            />
          </Flex>
          <Spacer />
        </Container>
      </Box>

      <Box $sx={{}}>
        <AmazonSearchResult
          productInfo={{
            title:`Waters of Babylon, that we `,
            tags: ['Medicinal', 'Voodoo', 'Fear'],
            star: {
              rating: 4,
              reviews: 88,
              mui: true,
            },
            price: 23.96,
            description: `Options: 3 Sizes`,
            children: [
              <Copy
                $sx={{
                  ...hookSc('productMeta'),
                  fontWeight: 'bold',
                }}
              >
                ASHUR SPECIAL
              </Copy>,
              null,
              <Copy>
                All I know is that I will never dish another raw deal
              </Copy>
            ]
          }}
        />
      </Box>
      <Box $sx={{}}>
        <VideoSearchResult
          title="Rizz AI Strong woman"
          meta="11M Ews"
          avatar={{
            name: 'Internet Historian',
            position: 'Plumber',
          }}
          description="Only I may snark.  Only I may live laugh and love."
        />
      </Box>
      <AuthSection
        background={
          <Box
            $sx={{
              backgroundColor: theme.palette.grey,
              width: '100%',
              height: '100%',
            }}
          />
        }
      >
        <RandomizedForm heading="Random form" buttonTwoLabel="Back" />
      </AuthSection>
      <AuthSection
        background={
          <Box
            $sx={{
              backgroundColor: theme.palette.grey,
              width: '100%',
              height: '100%',
            }}
          />
        }
      >
        <Flex col gap="6px">
          <CreditCardDetails />
          <div style={{ width: 'fit-content' }}>
            <PersonDetails />
          </div>
          <PersonDetails
            middleName="Middle Name"
            prefixOptions={['Mr.', 'Mrs.', 'I prefer not to say']}
          />
          <div style={{ width: 'fit-content' }}>
            <AddressDetails
              address2="Address Line 2"
              provinceOptions={['ON', 'AB']}
            />
          </div>
          <div style={{ width: 'fit-content' }}>
            <AddressDetails />
          </div>
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
              the killing, the monkeying around.`,
            },
            {
              asset: 'hulk.jpg',
              name: 'The Tower',
              position: 'Precarious at best',
              testimonial: `All my hopes rest on an outlandish
              weed fuelled fantasy`,
            },
          ],
          [
            {
              asset: 'historian.jpg',
              name: 'Angry boy',
              position: 'Crazy man',
              testimonial: 'Your best weapon against lunatics',
            },
            {
              asset: 'hulk.jpg',
              name: 'The Tower',
              position: 'Precarious at best',
              testimonial: `All my hopes rest on an outlandish
            weed fuelled fantasy`,
            },
          ],
          [
            {
              asset: 'historian.jpg',
              name: 'Colosseum',
              position: 'Crazy man',
              testimonial: 'Your best weapon against lunatics',
            },
            {
              asset: 'beetle.jpg',
              name: 'Dev Boi',
              position: 'Slinging hot snippets of React',
              testimonial: `I know you think it is so uncomfortable
            that I won't bring it up`,
              grey: true,
            },
          ],
        ]}
      />
      <LanderTestimonials
        bgc="#eee"
        testimonials={[
          [
            {
              asset: 'historian.jpg',
              name: 'Angry boy',
              position: 'Crazy man',
              testimonial: 'Your best weapon against lunatics',
            },
            {
              asset: 'hulk.jpg',
              name: 'The Tower',
              position: 'Precarious at best',
              testimonial: `All my hopes rest on an outlandish
            weed fuelled fantasy`,
            },
          ],
          [
            {
              asset: 'historian.jpg',
              name: 'Colosseum',
              position: 'Crazy man',
              testimonial: 'Your best weapon against lunatics',
            },
            {
              asset: 'beetle.jpg',
              name: 'Dev Boi',
              position: 'Slinging hot snippets of React',
              testimonial: `I know you think it is so uncomfortable
            that I won't bring it up`,
              grey: true,
            },
          ],
        ]}
      />
      <LanderCenter
        heading="Err, Kanban ain't mean nuttin to me"
        copy="I've written a couple of few things about
        why I don't want to be estimating story points or organizing work into tickets.
        I just do what I do, feel me???"
      >
        <MyAvatar
          asset="superman.jpg"
          name="Clark Kent"
          position="Important vital Dave Grrr guy"
        />
      </LanderCenter>
      <HeroCarousel bgi="amazon1.jpg" mui />
      <HeroCarousel>
        <Flex jcc aic col>
          <Heading level={2}>Hi Ho</Heading>
          <Heading level={4}>Buy now! Remorse Later!</Heading>
        </Flex>
      </HeroCarousel>
      <LanderTwoCol>
        <Headings little="Online and in Person" big="Now You're the big guy" />
        <Box
          $sx={{
            backgroundColor: theme.palette.primary,
            aspectRatio: '1',
            width: '80%',
          }}
        ></Box>
      </LanderTwoCol>
      <Fullscreen>
        <Footer>
          <Flex
            aic
            $sx={{
              paddingLeft: theme.spacing.gap,
            }}
          >
            <SocialMediaButtonRow icons={['facebook', 'figma', 'docker']} />
          </Flex>
          <Spacer />
          <TwoCol widthLeft="20%" growRight hGap={theme.spacing.biggishGap}>
            <Box
              $sx={{
                borderRight: `1px solid white`,
                height: '100%',
                padding: theme.spacing.gap,
              }}
            >
              <Copy
                $sx={{
                  color: 'currentColor',
                }}
              >
                Our mission is to heal the world, make it a better place, for
                you me and the entire hooman race
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
                  'Share your story',
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
                  'Let chaos take the world',
                ]}
                heading="Shabriri"
              />
              <ListOfLinks links={['Video', 'Climate']} heading="Climate" />
              <ListOfLinks
                links={['Religion', 'Drink', 'Pencil Case']}
                heading="Old time"
              />
            </Flex>
          </TwoCol>
          <Spacer />
          <ThreeCol>
            <Box $variant="center">A Browser Daemon company</Box>
            <Box $variant="center">Copyright © 2024 Year of the Rat</Box>
            <Box $variant={['center', 'underline']}>Terms of Service</Box>
          </ThreeCol>
          <Spacer />
          <Box
            $sx={{
              paddingLeft: theme.spacing.gap,
            }}
          >
            <Legalese text="There is more danger in the hidden betrayer than the open foe." />
            <Legalese text="If you see me again and I'm not smiling you're not gonna like it" />
            <Legalese text="David Grrrr subconscious is not so nice but I still didn't park in handicap" />
          </Box>
          <Spacer />
          <TwoCol widthRight="20%" growLeft hGap={theme.spacing.biggishGap}>
            <Flex jcsa>
              <ListOfLinks
                links={['Presents', 'Ribbons', 'Bow', 'Gift Wrap', 'Cider']}
                heading="Christmas"
              />
              <ListOfLinks
                links={[
                  'News',
                  'Our team',
                  'Help center',
                  'Support community',
                  'Press',
                  'Share your story',
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
                  'Let chaos take the world',
                ]}
                heading="Shabriri"
              />
              <ListOfLinks links={['Video', 'Climate']} heading="Climate" />
              <ListOfLinks
                links={['Religion', 'Drink', 'Pencil Case']}
                heading="Old time"
              />
            </Flex>
            <Box $sx={{}}>
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
          filters={[
            {
              type: 'input',
              placeholder: 'Name',
              label: 'Name',
            },
            {
              type: 'checkbox',
              label: 'Executives only',
              value: 'checked',
            },
          ]}
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
