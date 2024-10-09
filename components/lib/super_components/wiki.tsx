import React from "react"
import { useThemeHelper } from "../../hooks"
import { Anchor, Copy, Heading } from "../atomics"
import { Box, Flex } from "../layout"
import { TextAccordion } from "../atomics/accordion"

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

export const HtmlText = ({
  text,
}: {
  text: string
}) => {
  return (
    <span dangerouslySetInnerHTML={{
      __html: text
    }}/>
  )
}

export const WikiSection = ({
  headingProps,
  paragraph,
}: {
  headingProps: WikiHeadingProps
  paragraph: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('wikiSection')}>
      <WikiHeading {...headingProps} />
      <Copy $sx={hookSc('wikiCopy')}>
        <HtmlText text={paragraph} />
      </Copy>
    </Flex>
  )
}

export const TableOfContents = ({
  links
}: {
  links: Array<string | string[]>
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex col $sx={hookSc('tableOfContents')}>
      {
        links.map((link, index) => {
          return (typeof link === 'string'
            ? <Anchor $sx={hookSc('tableOfContentsLink')}
              key={index}>{link}</Anchor>
            : (
              <TextAccordion label={link[0]} open>
                <TableOfContents links={link.slice(1)} />
              </TextAccordion>
            )
          )
        })
      }
    </Flex>
  )
}