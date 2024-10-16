import { useThemeHelper } from "../../hooks"
import { CssProps } from "../../theme"
import { Button, Checkbox } from "../atomics"
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

export const ProceedCard = ({
  totalItems,
  price,
  buttonLabel = 'Proceed to checkout',
}: {
  totalItems: number
  price: number
  buttonLabel?: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex col $sx={hookSc('proceedCard')}>
      <LineItem
        left={`Subtotal (${totalItems}):`}
        right={`$${price.toFixed(2)}`}
      />
      {/* need a way to reverse the order */}
      <Checkbox
        labelSx={hookSc('proceedCardCheckboxLabel')}
        label="This order contains a gift"
      />
      <Button $sx={hookSc('proceedCardButton')}>
        {buttonLabel}
      </Button>
    </Flex>
  )
}

// header 
// bullshit link "Deselect all items"
// table header.  price at the end 
// checkbox image, product info price. qty dropdown
// table footer.  lineitem at the end 
export const ShoppingCart = () => {

}

// one big flex card, image, insidious promotion, button or link at the edn
export const StupidPromotion = () => {

}

// productInfo? (a two col product info + delivery options)
export const PurchaseProductInfo = () => {

}

// card, 
// header
// copy?
// link
// textAccordion? 
// productInfo? (a two col product info + delivery options)
export const PurchaseInfoCard = () => {

}

export const FingeronTheButtonHorizontal = () => {

}

export const FingerOnTheButtonVertical = () => {

}

export const IgnoreThisCard = ({
  html
}: {
  html: string
}) => {

}

