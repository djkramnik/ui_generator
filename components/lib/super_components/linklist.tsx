import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Flex } from "../layout"
import { Copy, Heading } from "../atomics"

export const ListOfLinks = ({
  heading,
  links,
}: {
  heading?: string
  links: string[]
}) => {
  const theme = useTheme()
  return (
    <Flex col $sx={{
      ...getSuperComponentStyles(
        'directoryLinksContainer',
        theme,
      )
    }}>
      {
        heading
          ? (
            <Heading level={5} $sx={{
              ...getSuperComponentStyles(
                'directoryLinksHeader',
                theme,
              )
            }}>
              {heading}
            </Heading>
          )
          : null
      }
      {
        links.map(l => {
          return (
            <Copy key={l} $sx={{
              ...getSuperComponentStyles(
                'directoryLink',
                theme,
              )
            }}>
              {l}
            </Copy>
          )
        })
      }
    </Flex>
  )
}