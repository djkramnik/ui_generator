import { useTheme } from 'styled-components'
import { getSuperComponentStyles, sxToStyle } from '../../theme'
import { Box, Flex, ThreeCol } from '../layout'
import { Container } from '../layout/container'
import React from 'react'
import { Copy, Heading } from '../atomics'
import { Testimonial, TestimonialProps } from '../super_components/testimonial'

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
            ...getSuperComponentStyles('landerTwoCol', theme),
          }}
        >
          <Flex
            $sx={{
              ...getSuperComponentStyles('landerTwoColChild', theme),
              ...getSuperComponentStyles('landerTwoColLeft', theme),
            }}
          >
            {children[0]}
          </Flex>
          <Flex
            $sx={{
              ...getSuperComponentStyles('landerTwoColChild', theme),
              ...getSuperComponentStyles('landerTwoColRight', theme),
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
    <section>
      <Container>
        <Flex
          $sx={{
            ...getSuperComponentStyles('landerCenter', theme),
          }}
        >
          <Heading
            level={2}
            $sx={{
              ...getSuperComponentStyles('landerHeading', theme),
            }}
          >
            {heading}
          </Heading>
          <Copy
            $sx={{
              ...getSuperComponentStyles('landerCopy', theme),
            }}
          >
            {copy}
          </Copy>
          <Box
            $sx={{
              ...getSuperComponentStyles('landerChild', theme),
            }}
          >
            {children}
          </Box>
        </Flex>
      </Container>
    </section>
  )
}

export const LanderTestimonials = ({
  testimonials,
  bgc,
}: {
  bgc?: string
  testimonials:
    | [TestimonialProps[], TestimonialProps[]]
    | [TestimonialProps[], TestimonialProps[], TestimonialProps[]]
}) => {
  const theme = useTheme()
  const cols = testimonials.length
  return (
    <section style={{
      ...sxToStyle({
        backgroundColor: bgc ?? theme.palette.background
      })
    }}>
      <Container>
        <Flex
          $sx={{
            ...getSuperComponentStyles(
              'landerTestimonials', theme),
            ...(
              cols === 2
                ? getSuperComponentStyles(
                  'landerTestimonialsTwoCol', theme)
                : {}
            )
          }}
        >
          <Flex
            $sx={{
              ...getSuperComponentStyles('landerTestimonialsCol', theme),
            }}
          >
            {testimonials[0].map((tProps, index) => {
              return <Testimonial {...tProps} key={index} />
            })}
          </Flex>
          <Flex
            $sx={{
              ...getSuperComponentStyles('landerTestimonialsCol', theme),
            }}
          >
            {testimonials[1].map((tProps, index) => {
              return <Testimonial {...tProps} key={index} />
            })}
          </Flex>
          {cols === 3 ? (
            <Flex
              $sx={{
                ...getSuperComponentStyles('landerTestimonialsCol', theme),
              }}
            >
              {testimonials[2].map((tProps, index) => {
                return <Testimonial {...tProps} key={index} />
              })}
            </Flex>
          ) : null}
        </Flex>
      </Container>
    </section>
  )
}
