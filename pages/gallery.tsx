import { Container } from '@mui/material'
import { Flex, Box } from '../components/lib'
import { Anchor, Button, ChimericAnchor, ChimericButton, ChimericCopy, ChimericHeading, Copy, Heading } from '../components/lib/atomics'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ResponsiveMixin } from '../components/theme'
import { Spacer } from '../components/lib/layout/spacer'
import React from 'react'

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
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

const Row = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <Flex row gap="6px">
      {
        React.Children.map(children, (child, index) => {
          return (
            <Cell key={index}>
              {child}
            </Cell>
          )
        })
      }
    </Flex>
  )
}

const Gallery = () => {
  return (
    <>
      <ThemeToggle />
      <Spacer />
      <Container>
        <Flex row gap="6px">
          <Cell>
            <Button>Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant="pill">Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant="border">Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant={['pill', 'bold', 'border']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <Button $variant={['bold', 'border', 'shadow']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <Button $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <ChimericButton>Subscribe</ChimericButton>
          </Cell>
          <Cell>
            <ChimericButton mui
              $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}>
              Subscribe
            </ChimericButton>
          </Cell>
        </Flex>
        <Flex row gap="6px">
          <Cell bgc="#eee">
            <Anchor href="#">About Us</Anchor>
          </Cell>
          <Cell bgc="#eee">
            <ChimericAnchor href="#" $variant="underline">About Us</ChimericAnchor>
          </Cell>
          <Cell bgc="#eee">
            <ChimericAnchor mui href="#">About Us</ChimericAnchor>
          </Cell>
          <Cell bgc="#333">
            <ChimericAnchor mui href="#" $variant="white">About Us</ChimericAnchor>
          </Cell>
        </Flex>
        <Row>
          <Copy $sx={{ maxWidth: '300px'}}>
            MINE: The attacks in Lebanon required getting deep into the supply chain,
            which is difficult to do. But the sabotage contributes to a sense of
            vulnerability that ordinary devices can become a source of danger.
          </Copy>
          <ChimericCopy $sx={{ maxWidth: '300px'}} mui>
            THEIRS: The attacks in Lebanon required getting deep into the supply chain,
            which is difficult to do. But the sabotage contributes to a sense of
            vulnerability that ordinary devices can become a source of danger.
          </ChimericCopy>
        </Row>
        <Row>
          <Heading level={1}>
            Singleness of Meaning, Above All
          </Heading>
          <ChimericHeading mui level={1}>
            Singleness of Meaning, Above All
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={2}>
            Slowly built a miniature village
          </Heading>
          <ChimericHeading mui level={2}>
            Slowly built a miniature village
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={3}>
            My relation to reality was not brilliant
          </Heading>
          <ChimericHeading mui level={3}>
            My relation to reality was not brilliant
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={4}>
            Memories, dreams, reflections
          </Heading>
          <ChimericHeading mui level={4}>
            Memories, dreams, reflections
          </ChimericHeading>
        </Row>
        <Row>
          <Heading level={5}>
            Progress requires facing challenges
          </Heading>
          <ChimericHeading mui level={5}>
            Progress requires facing challenges
          </ChimericHeading>
          <Heading level={5} $variant={['border', 'pill', 'white']} $sx={{
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            Grow up, Glow up
          </Heading>
          <ChimericHeading mui level={5} $variant={['border', 'pill', 'white']} $sx={{
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
            Grow up, Glow up
          </ChimericHeading>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
