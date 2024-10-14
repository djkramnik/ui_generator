import { useTheme } from "styled-components"
import { Flex } from "../../layout"
import { Button } from "../button"
import { getComponentStyles, mergeStyles } from "../../../theme/variants"
import { CssProps } from "../../../theme"

export const Toggle = ({
  selectedIndex,
  options,
  buttonVariant = ['pill', 'border'],
  buttonSx,
}: {
  selectedIndex?: number,
  options: string[]
  buttonVariant?: string | string[]
  buttonSx?: CssProps
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
                ...buttonSx,
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