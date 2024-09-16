// forms everywhere

import type { NextPage } from 'next'
import { Navbar, NavbarLinks } from '../components/lib/applied'
import { GsapLogo } from '../components/svg'
import { Container } from '../components/lib/layout/container'
import { Box, Flex, TwoCol } from '../components/lib'
import { Copy, Heading, Input, LabelizeIt, SimpleForm, TextArea, WithErrata, Image, Autocomplete, ChimericAnchor, ChimericButton, ChimericCopy } from '../components/lib/atomics'
import { Spacer } from '../components/lib/layout/spacer'
import { colors, CssProps, shadows } from '../components/theme'
import { AmazonPrimeLogo } from '../components/lib/logos'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { Dropdown, DropdownBubble } from '../components/lib/atomics/form/select'
import { Checkbox, CustomCheckbox } from '../components/lib/atomics/form/checkbox'
import { Toggle } from '../components/lib/atomics/form/toggle'
import { AccordionSection, TextAccordion } from '../components/lib/atomics/accordion'
import { ChimericModal, Modal } from '../components/lib/atomics/modal'
import { useState } from 'react'
import { ChimericTabs, Tabs } from '../components/lib/atomics/tabs'
import { getGenericColumns, BasicTable, Pagination, ChimericTable, ChimericPagination } from '../components/lib/atomics/table'
import { Carousel } from '../components/lib/applied/carousel'

const gsapInputSx: CssProps = {
  fontSize: '14px',
  padding: '18px 12px',
  backgroundColor: colors.gsapGrey2,
  color: colors.gsapWhite,
  border: `none`,
  borderBottom: `1px solid ${colors.gsapWhite}`,
  outline: 'none'
}

const errorSx: CssProps = {
  borderBottom: `1px solid ${colors.enercareRed}`,
}

const Checkout: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <>
    <button style={{
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'tan',
      zIndex: '100'
    }}
      onClick={() => setOpenModal(open => !open)}>
        Toggle Modal
    </button>
    <ThemeToggle />
      <div style={{ backgroundColor: '#eee'}}>
        <Carousel
          h="300px"
          bgi="url(https://m.media-amazon.com/images/I/71DMmDvKxKL._SX3000_.jpg)"
          iconLeft={
          <div style={{ 
            height: '300px',
            width: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            }}>
            <i className="fa-solid fa-chevron-left"
            style={{ color: '#fff', fontSize: '40px' }} />
          </div>}
          iconRight={
          <div style={{
            height: '300px',
            width: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <i className="fa-solid fa-chevron-right"
            style={{ color: '#fff', fontSize: '40px' }} />
          </div>}
          boxSx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          overlayContainerSx={{
            backgroundSize: 'cover'
          }}
        >
          <Heading level={2} $sx={{ textAlign: 'center' }}>
            Celebrate Health and Wellness Month
          </Heading>
        </Carousel>
      </div>
      <div style={{ minHeight: '100vh', backgroundColor: '#333'}}>
        <Navbar h="60px" flexProps={{
          $sx: { borderBottom: '1px solid', borderColor: colors.gsapWhite }
        }}>
            <NavbarLinks>
              <GsapLogo style={{ width: '100px', marginRight: '12px' }} />
            </NavbarLinks>
        </Navbar>
        <Container>
          <Flex aic>
            <div style={{ width: '600px', margin: 'auto', color: colors.gsapWhite }}>
              <Spacer />
              <Flex col gap="12px">
                <Heading level={2} $sx={{ fontSize: '36px' }}>
                  Sign up
                </Heading>
                <Flex gap="6px">
                  <Heading level={4} $sx={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    color: colors.gsapGrey,
                  }}>Already signed up?</Heading>
                  <ChimericAnchor href="#" mui>Sign In</ChimericAnchor>
                </Flex>
              </Flex>
              <Spacer h="12px" />
              <hr />
              <Spacer />
              <SimpleForm flexProps={{ gap: '30px' }}>
                <LabelizeIt label="Display Name" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }}
                  secondaryColor={colors.gsapGreen}>
                  <Input placeholder="Display Name" $sx={gsapInputSx} />
                </LabelizeIt>
                <WithErrata
                  errorIcon={
                    <i className="fa-solid fa-circle-exclamation"
                    style={{ color: colors.enercareRed }} />
                  }
                  errorMessage="I can be normal! I know I can!">
                  <LabelizeIt label="Email Address" secondaryLabel="REQUIRED" secondaryStyles={{
                    fontSize: '12px'
                  }} secondaryColor={colors.gsapGreen}>
                    <Input 
                      placeholder="Email Address"
                      $sx={{
                        ...gsapInputSx,
                        ...errorSx,
                      }}
                    />
                  </LabelizeIt>
                </WithErrata>
                <LabelizeIt label="Password" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }} secondaryColor={colors.gsapGreen}>
                  <Input type="password" placeholder="Password" $sx={{ fontSize: '14px', padding: '12px' }} />
                </LabelizeIt>
                <LabelizeIt label="Confirm Password" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }} secondaryColor={colors.gsapGreen}>
                  <Input type="password" placeholder="Confirm Password" $sx={{ fontSize: '14px', padding: '12px' }} />
                </LabelizeIt>
                <hr />
                <ChimericButton mui $variant="pill" $sx={{ fontSize: '18px' }}>
                  Create Account
                </ChimericButton>
              </SimpleForm>
              <Spacer />
            </div>
          </Flex>
        </Container>
      </div>
      <div style={{ minHeight: '100vh', backgroundColor: colors.amazonGrey }}>
        <Navbar h="60px" bgc={colors.amazonDark} flexProps={{ }}>
          <NavbarLinks $sx={{ width: '200px' }}>
            <AmazonPrimeLogo />
          </NavbarLinks>
          <NavbarLinks $sx={{ justifyContent: 'center' }}>
            <ChimericCopy mui $sx={{
              fontSize: '30px',
              color: colors.gsapWhite,
            }}>
              Secure Checkout
            </ChimericCopy>
            <i className="fa-solid fa-chevron-down" style={{ fontSize: '20px '}} />
          </NavbarLinks>
          <NavbarLinks $sx={{ width: '200px', justifyContent: 'flex-end'}}>
            <i className="fa-solid fa-shopping-cart" style={{ fontSize: '30px' }} />
            <Copy><strong>Cart</strong></Copy>
          </NavbarLinks>
        </Navbar>
        <Container>
          <Spacer />
          <TwoCol widthLeft="70%" growRight>
            <Flex col gap="20px" $sx={{ padding: '0 20px' }}>
              <div style={{ width: '100%', minHeight: '300px', backgroundColor: '#fff', padding: '20px 0' }}>
                <Tabs
                  selectedIndex={0}
                  tabs={['computer analysis', 
                  'chess tactics', 'chess books', 'great new deals']}>
                    <Box $sx={{
                      minHeight: '400px',
                      boxShadow: shadows.lichessCard,
                      padding: '20px'
                    }}>
                      <Flex col gap="12px">
                        <Heading level={3}>
                          Der Glock
                        </Heading>
                        <Image src="/thumbs/cnn74.jpg" $sx={{ width: '100%' }} />
                      </Flex>
                    </Box>
                </Tabs>
                <Spacer />
                <ChimericTabs
                  mui
                  selectedIndex={0}
                  tabs={['computer analysis', 
                  'chess tactics', 'chess books', 'great new deals']}>
                    <Box $sx={{
                      minHeight: '400px',
                      boxShadow: shadows.lichessCard,
                      padding: '20px'
                    }}>
                      <Flex col gap="12px">
                        <Heading level={3}>
                          Der Glock
                        </Heading>
                        <Image src="/thumbs/cnn74.jpg" $sx={{ width: '100%' }} />
                      </Flex>
                    </Box>
                </ChimericTabs>
                <Spacer />
                <Flex col gap="12px">
                  <ChimericPagination
                    mui
                    pages={[1,2,3,4,5,6,7,8]}
                    selectedIndex={0}
                  />
                  <ChimericTable<object>
                    mui
                    alternateColor='#eee'
                    headers={[
                      'why it is',
                      'always',
                      'suffering'
                    ]}
                    data={
                      [{
                        'a': 'adslfkasjlfkj',
                        'b': 'aldksjflaskdjf',
                        'c': 'asldfkjasldkfj'
                      }, {
                        'a': 'frig',
                        'b': 'the',
                        'c': 'world'
                      }, {
                        'a': 'I fell asleep',
                        'b': 'she got suffocated!?,',
                        'c': 'or somethin...'
                      }]
                    }
                    columns={getGenericColumns(['a', 'b', 'c'])}
                  />
                  <Spacer />
                  <Pagination
                    withEllipsis
                    pages={[1,2,3,4,5,6,7,8]}
                    selectedIndex={0}
                    postfix
                    highlightedIndex={3}
                    containerSx={{
                      borderRadius: '8px'
                    }}
                  />
                  <BasicTable<object>
                    alternateColor='#eee'
                    headers={[
                      'why it is',
                      'always',
                      'suffering'
                    ]}
                    data={
                      [{
                        'a': 'adslfkasjlfkj',
                        'b': 'aldksjflaskdjf',
                        'c': 'asldfkjasldkfj'
                      }, {
                        'a': 'frig',
                        'b': 'the',
                        'c': 'world'
                      }, {
                        'a': 'I fell asleep',
                        'b': 'she got suffocated!?,',
                        'c': 'or somethin...'
                      }]
                    }
                    columns={getGenericColumns(['a', 'b', 'c'])}
                  />
                </Flex>
                <Spacer />
                <SimpleForm>
                  <LabelizeIt label="Casual Greeting *">
                    <Dropdown
                      value="kookamunga"
                      options={['hi', 'hey', 'ayo', 'kookamunga']}
                      selectSx={{ width: '300px' }}
                      />
                  </LabelizeIt>
                  <LabelizeIt label="Random shit">
                    <CustomCheckbox label="Please hoont" />
                    <CustomCheckbox label="Dark souls > Bloodborne" checked />
                    <CustomCheckbox
                      icon={<i className="fa-solid fa-check" />}
                      label="My name John Leigh Pedimore"
                      checked />
                     <CustomCheckbox
                      icon={
                        <Copy>&#x2713;</Copy>
                      }
                      label="Zero tours of duty in Nam"
                      checked />
                      <CustomCheckbox
                        label="Im a friggin idiot"
                        checked
                        iconSx={{ color: 'white' }}
                        inputSx={{ backgroundColor: 'green', border: 'none' }}
                      />
                      <CustomCheckbox 
                        label="Im invincible?"
                        checked
                        radio
                        icon={<Box $sx={{
                          backgroundColor: 'blue',
                          borderRadius: '50%',
                          width: '100%',
                          aspectRatio: '1',
                        }} />}
                        inputSx={{ padding: '2px' }}
                      />
                    <Checkbox label="Can you put on an iron shirt?" checked />
                    <Checkbox radio label="I will chase Satan out of earf" checked />
                  </LabelizeIt>

                  <LabelizeIt label="Why are you so negative?">
                    <TextArea $sx={{ width: '50%' }}>Tone!</TextArea>
                  </LabelizeIt>

                  <LabelizeIt label="Best Beetlejuice day">
                    <Toggle 
                      selectedIndex={0}
                      options={[
                        'Monday',
                        'Toosday',
                        'Whensday',
                        'Hersday'
                      ]}
                    />
                  </LabelizeIt>
                  <TextAccordion label="Show holidays"
                    open copySx={{ 
                      color: colors.amazonBlue,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                      }}>
                    <Flex col gap="4px" $sx={{ paddingLeft: '20px' }}>
                      <ChimericCopy>Christmas</ChimericCopy>
                      <ChimericCopy mui>Winter festival month</ChimericCopy>
                      <Copy>Winter solstice sacrificial period</Copy>
                      <Copy>Cranberry season</Copy>
                    </Flex>
                  </TextAccordion>
                  <TextAccordion label="Show holidays"
                    copySx={{ 
                      color: colors.amazonBlue,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                      }}>
                    <Flex col gap="4px" $sx={{ paddingLeft: '20px' }}>
                      <Copy>Christmas</Copy>
                      <Copy>Winter festival month</Copy>
                      <Copy>Winter solstice sacrificial period</Copy>
                      <Copy>Cranberry season</Copy>
                    </Flex>
                  </TextAccordion>
                  <div style={{ width: '500px'}}>
                    <AccordionSection
                      heading="A Salut">
                      hi
                    </AccordionSection>
                    <AccordionSection
                      heading="Hi Jack" open>
                      Bye Jack
                    </AccordionSection>
                    <Spacer />
                  </div>
                  <AccordionSection
                    heading="Do we need a security code, call box or key to access?" open>
                    <SimpleForm>
                      <LabelizeIt label="Security code">
                        <Input type="text"
                          $sx={{ width: '70%' }}
                          placeholder="Security code for the door" />
                      </LabelizeIt>
                      <LabelizeIt label="Call box">
                        <Input type="text"
                          $sx={{ width: '70%' }}
                          placeholder="Call box number or name" />
                      </LabelizeIt>
                      <Checkbox 
                        label="Can you put on an iron shirt?"
                        labelSx={{ fontWeight: 'bold' }}
                        checked />
                        <LabelizeIt label="Put random quackery">
                          <TextArea rows={3}>Think of me as a curious farmboy</TextArea>
                        </LabelizeIt>
                    </SimpleForm>
                  </AccordionSection>
                  <LabelizeIt label="Reggae">
                    <Dropdown
                      artificial
                      value="reggae"
                      options={['reggae', 'hey', 'ayo', 'kookamunga']}
                      selectSx={{ width: '300px' }}
                      />
                  </LabelizeIt>
                  <Spacer />
                  <Spacer />
                </SimpleForm>
                <ChimericModal mui open={openModal}
                  handleClose={() => setOpenModal(false)}>
                  <Heading level={3}>Der Glock</Heading>
                </ChimericModal>
              </div>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#fff' }}>
                <Autocomplete open inputProps={{ 
                  placeholder: 'Search horror movie',
                  $sx: { borderRadius: '24px' }
                  }}>
                    {
                      ['Showing 3 results', 'The Shining', 'The Exorcist', 'Alien']
                        .map((movie, index) => {
                          return (
                            <Box $sx={{
                              padding: '4px 6px',
                              fontWeight: index === 0
                                ? 'bold'
                                : 'initial',
                              backgroundColor: index === 1
                                ? colors.antBlueLight
                                : 'transparent'
                            }}>
                              {movie}
                            </Box>
                          )
                        })
                    }
                </Autocomplete>
              </div>
            </Flex>
            <div style={{ 
              width: '100%',
              height: '300px',
              backgroundColor: '#aaa',
              padding: '0 20px',
              }}>
                <DropdownBubble 
                selectSx={{ width: '300px' }}
                label="Accomplish great things?">
                  <Image $sx={{ width: '300px'}} 
                    src="/thumbs/cnn88.jpg"
                  />
                </DropdownBubble>
              </div>
          </TwoCol>
        </Container>
      </div>
    </>
  )
}

export default Checkout