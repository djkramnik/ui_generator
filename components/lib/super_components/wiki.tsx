import React from "react"
import { useThemeHelper } from "../../hooks"
import { Anchor, Copy, Heading } from "../atomics"
import { Box, Flex } from "../layout"

type WikiHeadingProps = { 
  title: string
  lg?: boolean
  children?: React.ReactNode
}

export const WikiHeading = ({ 
  title,
  lg,
  children,
} : WikiHeadingProps) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={{
      ...hookSc('wikiHeadingContainer')
    }}>
      <Heading level={3} $sx={{
        ...hookSc('wikiHeading'),
        ...(lg ? hookSc('wikiHeadingLg') : {})
      }}>
        {title}
      </Heading>
      {children}
    </Box>

  )
}

const TextWithAnchors = ({
  anchorIndexes,
  text,
}: {
  anchorIndexes: number[]
  text: string
}) => {
  return (
    <span>
      {
        text.split(' ')
          .map((s, index) => {
            return (
              <React.Fragment key={index}>
                {
                  anchorIndexes.includes(index)
                    ? <><Anchor>{s}</Anchor>{' '}</>
                    : `${s} `
                }
              </React.Fragment>
            )
          })
      }
    </span>
  )
}

export const WikiSection = ({
  headingProps,
  paragraph,
  anchorIndexes,
}: {
  headingProps: WikiHeadingProps
  paragraph: string
  anchorIndexes?: number[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('wikiSection')}>
      <WikiHeading {...headingProps} />
      <Copy $sx={hookSc('wikiCopy')}>
        {
          anchorIndexes
            ? <TextWithAnchors anchorIndexes={anchorIndexes} text={paragraph} />
            : paragraph
        }
      </Copy>
    </Flex>
  )
}