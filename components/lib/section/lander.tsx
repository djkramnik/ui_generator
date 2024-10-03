import { useTheme } from 'styled-components'
import { getSuperComponentStyles } from '../../theme'
import { Box, Flex } from '../layout'
import { Container } from '../layout/container'
import React from 'react'
import { Copy, Heading } from '../atomics'

// no variability in this EXCEPT via theme
export const LanderTwoCol = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode]
}) => {
  const theme = useTheme()
  return (
    <section>
      <Container>
        <Flex
          $sx={{
            ...getSuperComponentStyles(
              'landerTwoCol',
              theme
            ),
          }}
        >
          <Flex
            $sx={{
              ...getSuperComponentStyles(
                'landerTwoColChild',
                theme
              ),
              ...getSuperComponentStyles(
                'landerTwoColLeft',
                theme,
              )
            }}
          >
            {children[0]}
          </Flex>
          <Flex
            $sx={{
              ...getSuperComponentStyles(
                'landerTwoColChild',
                theme
              ),
              ...getSuperComponentStyles(
                'landerTwoColRight',
                theme
              )
            }}
          >
            {children[1]}
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export const LanderCenter = ({
  children,
  heading,
  copy,
}: {
  children?: React.ReactNode
  heading: string
  copy: string
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'landerCenter',
        theme
      )
    }}>
      <Heading level={2} $sx={{
        ...getSuperComponentStyles(
          'landerHeading',
          theme
        )
      }}>
        {heading}
      </Heading>
      <Copy $sx={{
        ...getSuperComponentStyles(
          'landerCopy',
          theme
        )
      }}>
        {copy}
      </Copy>
      <Box $sx={{
        ...getSuperComponentStyles(
          'landerChild',
          theme
        )
      }}>
        {children}
      </Box>
    </Flex>
  )
}
