import { useThemeHelper } from "../../hooks"
import { CssProps } from "../../theme"
import { Button, Checkbox, Heading, Maybe, NakedCheckbox, Image, Copy, Anchor } from "../atomics"
import { Box, Flex } from "../layout"
import { Price, ProductInfo, ProductInfoProps } from "./product"

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
        <Image src={asset} />
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
export const StupidPromotion = ({
  asset,
  html,
  buttonLabel,
  link,
}: {
  asset: string
  html: string
  buttonLabel?: string
  link?: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('stupidPromotion')}>
      <Box $sx={hookSc('stupidPromotionImage')}>
        <Image $sx={{
          width: '100%'
        }} src={asset} />
      </Box>
      <Copy
        $sx={hookSc('stupidPromotionCopy')}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
      <Box $sx={hookSc('stupidPromotionRight')}>
        <Maybe condition={buttonLabel !== undefined}>
          <Button $sx={hookSc('stupidPromotionButton')}>
            {buttonLabel}
          </Button>
        </Maybe>
        <Maybe condition={link !== undefined}>
          <Anchor $sx={hookSc('stupidPromotionLink')}>
            {link}
          </Anchor>
        </Maybe>
      </Box>
    </Flex>
  )
}

// productInfo? (a two col product info + delivery options)
export const PurchaseProductInfo = ({
  info,
  deliveryOptions,
}: {
  info: ProductInfoProps & { asset: string }
  deliveryOptions: {
    label: string
    checked?: boolean
    children?: React.ReactNode
  }[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('purchaseProductInfo')}>
      <Flex $sx={hookSc('purchaseProduct')}>
        <Image src={info.asset} />
        <ProductInfo {...info} />
      </Flex>
      <Flex col $sx={hookSc('purchaseDeliveryOptions')}>
        {
          deliveryOptions.map((d, index) => {
            return (
              <Box key={index} $sx={hookSc('purchaseDelivery')}>
                <Checkbox checked={d.checked}
                  radio={true} label={d.label} />
                <Box $sx={hookSc('purchaseDeliveryExtras')}>
                  {d.children ?? null}
                </Box>
              </Box>
            )
          })
        }
      </Flex>
    </Flex>
  )
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

