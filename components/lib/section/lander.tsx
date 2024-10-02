import { useTheme } from 'styled-components'
import { getSuperComponentStyles } from '../../theme'
import { Flex } from '../layout'
import { Container } from '../layout/container'

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
