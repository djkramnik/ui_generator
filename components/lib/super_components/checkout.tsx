import { useThemeHelper } from "../../hooks"
import { CssProps } from "../../theme"
import { Box, Flex } from "../layout"

// amazon? walmart? sephora? drugs?  
export const ShoppingCartSummary = () => {

}

export const LineItem = ({
  left,
  right,
  leftSx,
  rightSx,
}: {
  left: React.ReactNode
  right: React.ReactNode
  leftSx?: CssProps
  rightSx?: CssProps
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('lineItem')}>
      <Box $sx={{
        ...hookSc('lineItemLeft'),
        ...leftSx,
      }}>
        {left}
      </Box>
      <Box $sx={{
        ...hookSc('lineItemRight'),
        ...rightSx,
      }}>
        {right}
      </Box>
    </Flex>
  )
}

export const LineItems = ({
  lineItems,
  finalItem,
}: {
  lineItems: Array<[string, string]>
  finalItem: [string, string]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex col $sx={hookSc('lineItems')}>
      {
        lineItems.map(([left, right], index) => {
          return (
            <LineItem key={index}
              left={left}
              right={right}
            />
          )
        })
      }
      <LineItem
        leftSx={hookSc('lineItemLeft')}
        rightSx={hookSc('lineItemRight')}
        left={finalItem[0]}
        right={finalItem[1]}
      />
    </Flex>
  )
}
