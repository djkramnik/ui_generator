import { Flex } from "../../layout"
import { Button } from "../button"

// need sx bundles
export const Toggle = ({
  selectedIndex,
  options,
}: {
  selectedIndex?: number,
  options: string[]
}) => {
  return (
    <Flex row gap="12px">
      {
        options.map((optionText, index) => {
          return (
            <Button $variant="pill"
              $sx={{
                backgroundColor: selectedIndex === index
                  ? 'black'
                  : 'white',
                color: selectedIndex === index
                  ? 'white'
                  : 'black',
                border: '2px solid black',
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