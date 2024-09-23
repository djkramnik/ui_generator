import { useTheme } from "styled-components"
import { Flex } from "../../layout"
import { Button } from "../button"
import { getComponentStyles } from "../../../theme/variants"

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
                ...getComponentStyles('toggleButtonButton', theme),
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