import { useThemeHelper } from "../../hooks"
import { CssProps } from "../../theme"
import { Button, Checkbox, Heading, Maybe, NakedCheckbox } from "../atomics"
import { Box, Card, Flex } from "../layout"
import { Price, ProductInfo, ProductInfoProps } from "./product"
import { ThumbnailImage } from "./thumbnail"

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

const CartRow = ({
  info,
  checked,
}: {
  info: ProductInfoProps & { asset: string }
  checked?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  const { asset, ...rest } = info
  return (
    <Flex aic $sx={hookSc('cartRow')}>
      <NakedCheckbox checked={checked} />
      <Flex $sx={hookSc('cartProduct')}>
        <ThumbnailImage asset={asset} />
        <ProductInfo {...rest} />
      </Flex>
      <Box $sx={hookSc('cartRowPrice')}>
        <Price dollars={Math.floor(info.price)}
          cents={info.price - Math.floor(info.price)}
        />
      </Box>
    </Flex>
  )
}

// header 
// bullshit link "Deselect all items"
// table header.  price at the end 
// checkbox image, product info price. qty dropdown
// table footer.  lineitem at the end 
export const ShoppingCart = ({
  heading,
  link,
  products,
  price,
  checkedIndexes,
}: {
  heading: string
  link?: string
  products: (ProductInfoProps & { asset: string })[]
  price: number
  checkedIndexes?: number[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('cartSummary')}>
      <Flex col>
        <Heading level={3}>
          {heading}
        </Heading>
        <Maybe condition={link !== undefined}>
          {link}
        </Maybe>
        <Flex jcfe $sx={hookSc('cartHeader')}>
          Price
        </Flex>
        <Flex col>
          {
            products.map((p, index) => {
              return (
                <CartRow
                  checked={(checkedIndexes ?? []).includes(index)}
                  info={p}
                  key={index}
                />
              )
            })
          }
        </Flex>
        <Flex jcfe $sx={hookSc('cartFooter')}>
          <LineItem
            left={`Subtotal (${products.length}):`}
            right={`$${price.toFixed(2)}`}
          />
        </Flex>
      </Flex>
    </Box>
  )
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

