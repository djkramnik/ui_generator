import { Flex, Box } from '../components/lib'
import {
  Anchor,
  Button,
  ChimericAnchor,
  ChimericButton,
  ChimericButtonWithIcon,
  ChimericCopy,
  ChimericHeading,
  ChimericIcon,
  ChimericModal,
  Copy,
  Heading,
  Icon,
  IconButton,
} from '../components/lib/atomics'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ResponsiveMixin } from '../components/theme'
import { Spacer } from '../components/lib/layout/spacer'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Container } from '../components/lib/layout/container'
import { BasicTable, ChimericTable, getGenericColumns } from '../components/lib/atomics/table'

const Cell = ({
  children,
  bgc = '#aaa',
}: {
  children?: React.ReactNode
  bgc?: ResponsiveMixin
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
      }}
    >
      {children}
    </Box>
  )
}

const Row = ({ children, bgc }: { 
  children?: React.ReactNode
  bgc?: string
 }) => {
  return (
    <Flex row gap="6px">
      {React.Children.map(children, (child, index) => {
        return <Cell key={index} bgc={bgc}>{child}</Cell>
      })}
    </Flex>
  )
}

const Gallery = () => {
  const theme = useTheme()
  const [chimericOpen, setChimericOpen] = useState<boolean>(false)
  const [chimericMuiOpen, setChimericMuiOpen] = useState<boolean>(false)
  return (
    <>
      <ThemeToggle />
      <Spacer />
      <Container>
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
                startDate: '10/10/2022'
              },
              {
                name: 'Chris Williamson',
                position: 'CEO',
                office: 'Glass Pavilion',
                age: '29',
                startDate: '8/17/2000'
              },
              {
                name: 'Moldy Residue',
                position: 'Waste Manager',
                office: 'Barone Sanitation',
                age: '44',
                startDate: '12/12/1978'
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
                startDate: '10/10/2022'
              },
              {
                name: 'Chris Williamson',
                position: 'CEO',
                office: 'Glass Pavilion',
                age: '29',
                startDate: '8/17/2000'
              },
              {
                name: 'Moldy Residue',
                position: 'Waste Manager',
                office: 'Barone Sanitation',
                age: '44',
                startDate: '12/12/1978'
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
          <IconButton textSx={{ color: '#fff' }}
            containerSx={{
              border: '2px solid white'
            }}
            iconStyle={{ color: '#fff' }}
            icon={Icon.stripe} text="Payment" />
          <IconButton mui textSx={{ color: '#fff' }}
            iconStyle={{ color: '#fff' }}
            icon={Icon.stripe} text="Payment" />
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
          <ChimericButtonWithIcon $variant="pill" mui text="Suppress Shadow" icon={Icon.figma} />
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
            <Button onClick={() => setChimericMuiOpen(true)}>open mui modal</Button>
            <ChimericModal
              handleClose={() => setChimericMuiOpen(false)}
              mui open={chimericMuiOpen}>
              <Heading level={3}>Everything Vibrates</Heading>
            </ChimericModal>
          </Flex>
          <Flex col gap="6px">
            <Button onClick={() => setChimericOpen(true)}>open modal</Button>
            <ChimericModal open={chimericOpen}
              handleClose={() => setChimericOpen(false)}>
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
