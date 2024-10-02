import { useTheme } from "styled-components"
import { Flex } from "../layout"
import { Heading } from "../atomics"

export const Headings = ({
  big,
  little,
}: {
  big: string
  little?: string
}) => {
  const theme = useTheme()
  
  return (
    <Flex col $sx={{
      gap: theme.spacing.gap
    }}>
      {
        little
          ? (
            <Heading level={5} $sx={{
              color: theme.palette.primary,
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              {little}
            </Heading>
          )
          : null
      }
      <Heading level={2} $sx={{
        color: theme.palette.copy
      }}>
        {big}
      </Heading>
    </Flex>
  )
}