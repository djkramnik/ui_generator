import { useTheme } from "styled-components"
import { Flex } from "../../layout"
import { Button } from "../button"
import { getComponentStyles, mergeStyles } from "../../../theme/variants"

export const Toggle = ({
  selectedIndex,
  options,
  buttonVariant = ['pill', 'border'],
}: {
  selectedIndex?: number,
  options: string[]
  buttonVariant?: string | string[]
}) => {
  const theme = useTheme()
  const buttonDiff = mergeStyles({
    theme,
    $variant: buttonVariant,
    component: 'toggleButtonButton'
  })
  return (
    <Flex row $sx={{
      ...getComponentStyles('toggleButtonContainer', theme),
    }}>
      {
        options.map((optionText, index) => {
          return (
            <Button key={index}
              $variant={buttonVariant}
              $sx={{
                ...buttonDiff,
                ...(
                  selectedIndex === index
                    ? getComponentStyles('toggleButtonSelected', theme)
                    : {}
                ),
              }}
            >
              {optionText}
            </Button>
          )
        })
      }
    </Flex>
  )
}