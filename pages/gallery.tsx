import { Flex, Box, Card } from '../components/lib'
import {
  Anchor,
  Autocomplete,
  Button,
  Checkbox,
  ChimericAnchor,
  ChimericAutocomplete,
  ChimericButton,
  ChimericButtonWithIcon,
  ChimericCheckbox,
  ChimericCopy,
  ChimericDropdown,
  ChimericHeading,
  ChimericIcon,
  ChimericInput,
  ChimericModal,
  Copy,
  CustomCheckbox,
  Dropdown,
  Heading,
  Icon,
  IconButton,
  Input,
  InputWithIcon,
  LabelizeIt,
  Noop,
  Select,
  Toggle,
  WithErrata,
} from '../components/lib/atomics'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ResponsiveMixin, shadows } from '../components/theme'
import { Spacer } from '../components/lib/layout/spacer'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Container } from '../components/lib/layout/container'
import {
  ChimericTable,
  getGenericColumns,
} from '../components/lib/atomics/table'
import {
  AccordionSection,
  ChimericAccordion,
  TextAccordion,
} from '../components/lib/atomics/accordion'
import { sxToStyle } from '../components/theme/variants'
import { ContentFitter } from '../components/lib/exotic/content-fitter'
import { Headings } from '../components/lib/super_components/headings'
import { MyAvatar } from '../components/lib/super_components'
import { Testimonial } from '../components/lib/super_components/testimonial'
import { RandomThumbnail, RandomThumbnailImage } from '../components/lib/super_components/thumbnail'
import { Price, ProductInfo, Starz } from '../components/lib/super_components/product'

const Cell = ({
  children,
  bgc = '#aaa',
  withGrow,
}: {
  children?: React.ReactNode
  bgc?: ResponsiveMixin
  withGrow?: boolean
}) => {
  return (
    <Box
      $sx={{
        backgroundColor: bgc,
        padding: '12px',
        width: 'fit-content',
        marginBottom: '12px',
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center',
        flexGrow: withGrow ? '1' : '0',
      }}
    >
      {children}
    </Box>
  )
}

const Row = ({
  children,
  bgc,
  withGrow,
}: {
  children?: React.ReactNode
  bgc?: string
  withGrow?: boolean
}) => {
  return (
    <Flex row gap="6px" wrap>
      {React.Children.map(children, (child, index) => {
        return (
          <Cell withGrow={withGrow === true} key={index} bgc={bgc}>
            {child}
          </Cell>
        )
      })}
    </Flex>
  )
}

const Gallery = () => {
  const theme = useTheme()
  const bgc = theme.palette.background as any as string
  const [chimericOpen, setChimericOpen] = useState<boolean>(false)
  const [chimericMuiOpen, setChimericMuiOpen] = useState<boolean>(false)
  return (
    <>
      <ThemeToggle />
      <Spacer />
      <Container>
        <Row>
          <ProductInfo
            title="Host Defense Stamets Mushroom Power Roar Capsules"
            tags={['Medicinal', 'Voodoo', 'Fear']}
            star={{
              rating: 4,
              reviews: 88
            }}
            price={23.96}
          />
        </Row>
        <Row>
          <Price
            dollars={199}
          />
          <Price
            dollars={199}
            cents={1}
          />
          <Price
            dollars={199}
            cents={15}
            symbol={'€'}
            currency={'EUR'}
          />
          <Starz rating={4} />
          <Starz mui rating={5} />
          <Starz mui rating={3} />
        </Row>
        <Row>
          <Noop label="haha">
            <Input placeholder="Pina Colada mix" /> 
          </Noop>
          <Box $sx={{ width: '160px' }}>
            <RandomThumbnailImage />
          </Box>
          <RandomThumbnail size="sm" />
          <RandomThumbnail size="md" />
          <RandomThumbnail size="lg" />
        </Row>
        <Row>
          <MyAvatar asset="superman.jpg"
            name="Clark Kent"
            position="Important vital Dave Grrr guy"
          />
          <Testimonial
            asset="superman.jpg"
            name="Clark Kent"
            position="Important vital Dave Grrr guy"
            testimonial={
              `I feel safe and smug, I mean snug, in my new atomic bunker.  Now who is laughing!`
            }
          />
          <Card>
            <Spacer />
            <Spacer />
            <Heading level={3}>
              Sick to my stomach
            </Heading>
            <Spacer />
            <Spacer />
          </Card>
        </Row>
        <Row>
          <Headings
            little="Online and in Person"
            big="Sell here, there, and everywhere"
          />
        </Row>
        <Row>
          <Toggle
            buttonVariant={[
              'transparent',
              'pill',
              'color:copy',
              'background:grey',
              'borderless',
              'padding:small'
            ]}
            selectedIndex={0}
            options={['Monday', 'Toosday', 'Whensday', 'Hersday']}
          />
        </Row>
        <Row>
          <ContentFitter extraPx={20}>
            <Dropdown
              selectSx={{
                border: 'none',
                backgroundColor: 'transparent'
              }}
              icon={Icon.caretDown}
              value={'v.5.0.0'}
              artificial
              options={['v5.0.0', 'v4.0.0']}
            />
          </ContentFitter>
          <ContentFitter extraPx={20}>
            <Dropdown
              open
              selectSx={{
                border: 'none',
                backgroundColor: 'transparent'
              }}
              icon={Icon.caretDown}
              value={'v.5.0.0'}
              artificial
              options={['v5.0.0', 'v4.0.0']}
            />
          </ContentFitter>
        </Row>
        <Row withGrow>
          <Dropdown
            selectSx={{
              paddingLeft: '12px',
              width: '100%'
            }}
            options={[
              'Sorry to interrupt',
              'Leave it alone'
            ]}
          />
          <ChimericDropdown
            mui
            value="Sorry to interrupt"
            selectSx={{
              paddingLeft: '12px',
              width: '100%'
            }}
            options={[
              'Sorry to interrupt',
              'Leave it alone'
            ]}
          />
        </Row>
        <Row>
          <Autocomplete
            inputProps={{
              placeholder: 'Enter sport'
            }}
            open
            options={[
              'NBA',
              'MLB',
            ]}
          />
          <ChimericAutocomplete
            mui
            label="Favorite sport"
            inputProps={{
              placeholder: 'Enter sport', 
            }}
            open
            options={[
              'NBA',
              'MLB',
            ]}
          />
        </Row>
        <Spacer h="120px"/>
        <Row>
          <CustomCheckbox label="Swelled to include" />
          <CustomCheckbox label="To quote"
          iconSx={{ color: 'white' }}
          checked inputSx={{ 
            backgroundColor: 'green',
            border: 'none',
            boxShadow: shadows.lichessCard
          }} />
          <CustomCheckbox radio label="Preaching to myself" />
          <CustomCheckbox radio label="A variation"
          icon={
            <Box
            $sx={{
              backgroundColor: 'blue',
              borderRadius: '50%',
              width: '90%',
              aspectRatio: '1',
            }}
          />
          }
          checked  />
        </Row>
        <Row>
          <ChimericCheckbox label="Synchronicity" radio checked />
          <ChimericCheckbox label="Rationality can explain" radio />
          <ChimericCheckbox mui label="Synchronicity" radio checked />
          <ChimericCheckbox mui label="Rationality can explain" radio />
        </Row>
        <Row>
          <Checkbox label="Ego and brain" />
          <ChimericCheckbox mui label="God is dead" />
          <Checkbox label="Drawing conclusions" checked />
          <ChimericCheckbox mui label="Great pan is dead" checked />
        </Row>
        <Row bgc={bgc} withGrow>
          <Box $variant="fullwidth">
            <InputWithIcon
              rev
              icon={Icon.search}
              inputProps={{
                placeholder: 'Search Biblical Passages',
                $variant: ['fullwidth', 'pill', 'border'],
                $sx: {
                  borderColor: theme.palette.secondary
                }
              }}
            />
          </Box>
        </Row>
        <Row bgc={bgc} withGrow>
          <Box $variant="fullwidth">
            <InputWithIcon
              icon={Icon.search}
              inputProps={{
                placeholder: 'Search Biblical Passages',
                $variant: ['fullwidth', 'pill', 'border'],
                $sx: {
                  borderColor: theme.palette.secondary
                }
              }}
            />
          </Box>
        </Row>
        <Row bgc="#eee">
          <Box>
            <Heading level={3} $variant={['fullwidth', 'center']} $sx={{
              width: '100%',
              color: '#333'
            }}>
              Sign up to Ancient Folklore
            </Heading>
            <Spacer h="12px" />
            <Flex col gap="6px">
              <LabelizeIt label="Name" secondaryLabel="required">
                <ChimericInput mui placeholder="Sinking back" />
              </LabelizeIt>
              <WithErrata errorMessage="Error: Required" errorIcon={(
                <ChimericIcon icon={Icon.circleExclamation} iconStyle={{
                  ...sxToStyle({
                    color: theme.palette.error
                  })
                }} />
              )}>
                <LabelizeIt label="Town" secondaryLabel='*required'
                secondaryLabelSx={{ color: theme.palette.error }}
                >
                  <InputWithIcon
                    mui
                    placeholder="Mystikal"
                    icon={Icon.house}
                    iconStyles={{
                      ...sxToStyle({ 
                        color: theme.palette.error,
                        borderColor: theme.palette.error,
                      }),
                    }}
                    inputProps={{
                      $variant: 'fullwidth',
                      $sx: {
                        color: theme.palette.error,
                      }

                    }}
                  />
                </LabelizeIt>
              </WithErrata>
              <LabelizeIt label="Love life">
                <InputWithIcon
                  mui
                  icon={Icon.envelope}
                  inputProps={{
                    placeholder: 'Vain and Unadjusted',
                    type: 'email',
                    $variant: 'fullwidth'
                  }}
                />
              </LabelizeIt>
              <LabelizeIt label="Crocodiles,Dragons">
                <InputWithIcon
                  mui
                  icon={Icon.heart}
                  inputProps={{
                    placeholder: 'Active Imagination Password',
                    type: 'password',
                    $variant: 'fullwidth'
                  }}
                />
              </LabelizeIt>
            </Flex>
            <Spacer h="12px"/>
            <Flex row gap="12px">
              <Button $variant="bold" $sx={{ flexGrow: '1'}}>
                Depths of the Mind
              </Button>
              <Button $variant={["bgc:secondary", "bold"]}>
                Cancel
              </Button>
            </Flex>
          </Box>
          <Box>
          <Heading level={3} $variant={['fullwidth', 'center']} $sx={{
              width: '100%',
              color: '#333'
            }}>
              Needing to change everything as I go
            </Heading>
            <Spacer h="12px" />
            <Flex col gap="6px">
              <LabelizeIt label="Name">
                <Input type="name" placeholder="Sinking back" />
              </LabelizeIt>
              <LabelizeIt label="Town">
                <InputWithIcon
                  placeholder="Anima image"
                  icon={Icon.house}
                  inputProps={{
                    $variant: 'fullwidth'
                  }}
                />
              </LabelizeIt>
              <LabelizeIt label="Love life">
                <InputWithIcon
                  placeholder="Overvaluation"
                  icon={Icon.envelope}
                  inputProps={{
                    placeholder: 'Vain and Unadjusted',
                    type: 'email',
                    $variant: 'fullwidth'
                  }}
                />
              </LabelizeIt>
              <LabelizeIt label="Affects">
                <InputWithIcon
                  placeholder="Falsifies"
                  icon={Icon.heart}
                  inputProps={{
                    placeholder: 'PHAntasies',
                    type: 'email',
                    $variant: 'fullwidth'
                  }}
                />
              </LabelizeIt>
            </Flex>
            <Spacer h="12px"/>
            <Flex row gap="12px">
              <Button $variant="bold" $sx={{ flexGrow: '1'}}>
                Depths of the Mind
              </Button>
              <Button $variant={["bgc:secondary", "bold"]}>
                Cancel
              </Button>
            </Flex>
          </Box>
        </Row>
        <Row bgc={bgc} withGrow>
          {/**TODO: componentize this prob in layout / super-components.  the stacked accordions */}
          <Flex col $sx={{ width: '100%' }}>
            <ChimericAccordion
              icon={<ChimericIcon icon={Icon.plus} />}
              heading="Will it irriate me skin"
              summarySx={{
                backgroundColor: bgc,
              }}
              rootVariant={['borderless:b', 'borderless:l', 'borderless:r']}
            />
            <ChimericAccordion
              open
              icon={<ChimericIcon icon={Icon.minus} />}
              heading="Will it dry out me eyes"
              summarySx={{
                backgroundColor: bgc,
              }}
              rootVariant={['borderless:l', 'borderless:r']}
            >
              <Copy>
                I saw two toddlers interacting with one another
                near a Starbucks. They were both around one, and
                they took turns staring curiously or joyously at one another,
                and a small bird pecking at crumbs nearby. One was a Chinese boy,
                the one closer to the bird, and the other was an Iranian girl.
              </Copy>
            </ChimericAccordion>
          </Flex>
        </Row>
        <Row bgc={bgc}>
          <TextAccordion label="stupido" open>
            <ul style={{ padding: '0' }}>
              <li>people love it</li>
              <li>when you lose</li>
              <li>dirty laundry</li>
            </ul>
          </TextAccordion>
          <TextAccordion
            copySx={{
              fontWeight: 'bold',
            }}
            label="Show more holidays"
            open
          >
            <Flex col gap="2px">
              <span>Festivus</span>
              <span>Kwanza</span>
              <span>Pilgrimage to the Bolognese</span>
            </Flex>
          </TextAccordion>
        </Row>
        <Row bgc={bgc} withGrow>
          <ChimericAccordion mui heading="Can I write you in jail">
            Yes, but only on acidtone paper.
          </ChimericAccordion>
        </Row>
        <Row bgc={bgc} withGrow>
          <AccordionSection
            open
            icon={<ChimericIcon mui icon={Icon.caretUp} />}
            heading="Can I supplement with hard drugs"
          >
            <Copy>
              Of course you can. Your individual results, may vary between
              spectacular, and down right miraculous. The only danger is you
              don't chuck your money into our trustworthy hands fast enough, and
              time, unfortunately, may run out on you and all your adorable
              hopes and dreams.
            </Copy>
          </AccordionSection>
        </Row>
        <Row bgc="white" withGrow>
          <AccordionSection heading="Can I supplement with hard drugs">
            <Copy>
              Of course you can. Your individual results, may vary between
              spectacular, and down right miraculous. The only danger is you
              don't chuck your money into our trustworthy hands fast enough, and
              time, unfortunately, may run out on you and all your adorable
              hopes and dreams.
            </Copy>
          </AccordionSection>
        </Row>
        <Row bgc="white">
          <ChimericTable<object>
            mui
            sort={{
              header: 'Age',
              direction: 'asc',
            }}
            noColumnBorder
            alternateColor="#eee"
            headers={['Name', 'Position', 'Office', 'Age', 'Start Date']}
            data={[
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
            ]}
            columns={getGenericColumns([
              'name',
              'position',
              'office',
              'age',
              'startDate',
            ])}
          />
        </Row>
        <Row bgc="white">
          <ChimericTable<object>
            sort={{
              header: 'Age',
              direction: 'asc',
            }}
            noColumnBorder
            alternateColor="#eee"
            headers={['Name', 'Position', 'Office', 'Age', 'Start Date']}
            data={[
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
            ]}
            columns={getGenericColumns([
              'name',
              'position',
              'office',
              'age',
              'startDate',
            ])}
          />
        </Row>
        <Row>
          <IconButton icon={Icon.house} text="Home" />
          <IconButton mui icon={Icon.house} text="Home" />
          <IconButton icon={Icon.youtube} text="Subscription" />
          <IconButton mui icon={Icon.youtube} text="Subscription" />
          <IconButton
            textSx={{ color: '#fff' }}
            containerSx={{
              border: '2px solid white',
            }}
            iconStyle={{ color: '#fff' }}
            icon={Icon.stripe}
            text="Payment"
          />
          <IconButton
            mui
            textSx={{ color: '#fff' }}
            iconStyle={{ color: '#fff' }}
            icon={Icon.stripe}
            text="Payment"
          />
        </Row>
        <Row>
          <Button>Subscribe</Button>
          <Button $variant="pill">Subscribe</Button>
          <Button $variant="border">Subscribe</Button>
          <Button $variant={['pill', 'bold', 'border']}>Subscribe</Button>
          <Button $variant={['bold', 'border', 'shadow']}>Subscribe</Button>
          <Button
            $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}
          >
            Subscribe
          </Button>
          <ChimericButton
            mui
            $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}
          >
            Subscribe
          </ChimericButton>
          <ChimericButton>Subscribe</ChimericButton>
        </Row>
        <Row>
          <ChimericButtonWithIcon
            $variant="pill"
            mui
            text="Suppress Shadow"
            icon={Icon.figma}
          />
          <ChimericButtonWithIcon
            $variant={['border', 'pill', 'shadow']}
            text="Too hot"
            icon={Icon.fire}
            $sx={{ backgroundColor: theme.palette.error }}
          />
          <ChimericButtonWithIcon
            iconPos="start"
            mui
            $variant={['border', 'pill', 'shadow']}
            text="Too hot"
            icon={Icon.fire}
            $sx={{ backgroundColor: theme.palette.error }}
          />
          <ChimericButtonWithIcon
            iconPos="start"
            $variant={['border', 'pill']}
            text="Jungian"
            icon={Icon.anglesRight}
          />
        </Row>
        <Row>
          <Flex col gap="6px">
            <Button onClick={() => setChimericMuiOpen(true)}>
              open mui modal
            </Button>
            <ChimericModal
              handleClose={() => setChimericMuiOpen(false)}
              mui
              open={chimericMuiOpen}
            >
              <Heading level={3}>Everything Vibrates</Heading>
            </ChimericModal>
          </Flex>
          <Flex col gap="6px">
            <Button onClick={() => setChimericOpen(true)}>open modal</Button>
            <ChimericModal
              open={chimericOpen}
              handleClose={() => setChimericOpen(false)}
            >
              <Heading level={3}>Everything Vibrates</Heading>
            </ChimericModal>
          </Flex>
        </Row>
        <Row>
          <ChimericIcon icon={Icon.envelope} />
          <ChimericIcon icon={Icon.envelope} mui />
          <ChimericIcon icon={Icon.twitter} mui />
          <ChimericIcon icon={Icon.facebook} mui />
          <i
            className="fa-brands fa-twitter"
            style={{
              fontSize: '22px',
              color: 'black',
            }}
          />
        </Row>
        <Row>
          <Anchor href="#">About Us</Anchor>
          <ChimericAnchor mui href="#">
            About Us
          </ChimericAnchor>
          <ChimericAnchor href="#" $variant="underline">
            About Us
          </ChimericAnchor>
        </Row>
        <Row>
          <Copy $sx={{ maxWidth: '300px' }}>
            MINE: The attacks in Lebanon required getting deep into the supply
            chain, which is difficult to do. But the sabotage contributes to a
            sense of vulnerability that ordinary devices can become a source of
            danger.
          </Copy>
          <ChimericCopy $sx={{ maxWidth: '300px' }} mui>
            THEIRS: The attacks in Lebanon required getting deep into the supply
            chain, which is difficult to do. But the sabotage contributes to a
            sense of vulnerability that ordinary devices can become a source of
            danger.
          </ChimericCopy>
        </Row>
        <Row>
          <Heading level={1}>Singleness of Meaning, Above All</Heading>
          <ChimericHeading mui level={1}>
            Singleness of Meaning, Above All
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={2}>Slowly built a miniature village</Heading>
          <ChimericHeading mui level={2}>
            Slowly built a miniature village
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={3}>My relation to reality was not brilliant</Heading>
          <ChimericHeading mui level={3}>
            My relation to reality was not brilliant
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={4}>Memories, dreams, reflections</Heading>
          <ChimericHeading mui level={4}>
            Memories, dreams, reflections
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={5}>Progress requires facing challenges</Heading>
          <ChimericHeading mui level={5}>
            Progress requires facing challenges
          </ChimericHeading>
          <Heading
            level={5}
            $variant={['border', 'pill', 'white']}
            $sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            Grow up, Glow up
          </Heading>
          <ChimericHeading
            mui
            level={5}
            $variant={['border', 'pill', 'white']}
            $sx={{
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            Grow up, Glow up
          </ChimericHeading>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
