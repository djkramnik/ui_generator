import { useThemeHelper } from "../../hooks"
import { CssProps } from "../../theme"
import { Button, Checkbox, Heading, Maybe, NakedCheckbox, Image, Copy, Anchor, CustomCheckbox } from "../atomics"
import { Box, Flex } from "../layout"
import { Price, ProductInfo, ProductInfoProps } from "./product"

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

type LineItemsProps = {
  lineItems: Array<[string, string]>
  finalItem: [string, string]
}

export const LineItems = ({
  lineItems,
  finalItem,
}: LineItemsProps) => {
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
        leftSx={hookSc('finalItemLeft')}
        rightSx={hookSc('finalItemRight')}
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
        leftSx={hookSc('proceedCardLineItem')}
        rightSx={hookSc('proceedCardPrice')}
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

export const CartRow = ({
  info,
  checked,
  noPrice,
}: {
  info: ProductInfoProps & { asset: string }
  checked?: boolean
  noPrice?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  const { asset, ...rest } = info
  return (
    <Flex $sx={hookSc('cartRow')}>
      <Box $sx={hookSc('cartRowCheckbox')}>
        <CustomCheckbox checked={checked} label="" />
      </Box>
      <Flex $sx={hookSc('cartProduct')}>
        <Image src={asset} $sx={hookSc('cartProductImg')}/>
        <ProductInfo {...rest} />
      </Flex>
      <Maybe condition={noPrice !== true}>
        <Box $sx={hookSc('cartRowPrice')}>
          <Price dollars={Math.floor(info.price)}
            priceSx={{
              fontSize: 'inherit',
              color: 'inherit',
              fontWeight: 'inherit'
            }}
            cents={
              Math.round((info.price - Math.floor(info.price)) * 100)
            }
          />
        </Box>
      </Maybe>
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
          <Anchor>{link}</Anchor>
        </Maybe>
        <Flex jcfe $sx={{...hookSc('cartHeader')}}>
          Price
        </Flex>
        <Flex col $sx={hookSc('cartProducts')}>
          {
            products.map((p, index) => {
              return (
                <Box>
                  <CartRow
                    checked={(checkedIndexes ?? []).includes(index)}
                    info={p}
                    key={index}
                  />
                  {
                    index !== products.length - 1
                      ? (
                        <hr 
                          style={{ color: 'inherit' }}
                        />
                      )
                      : null
                  }
                </Box>
              )
            })
          }
        </Flex>
        <Flex jcfe $sx={hookSc('cartFooter')}>
          <Box $sx={hookSc('cartFooterLineItem')}>
            <LineItem
              leftSx={hookSc('cartFooterCopy')}
              rightSx={hookSc('cartFooterCopy')}
              left={`Subtotal (${products.length}):`}
              right={`$${price.toFixed(2)}`}
            />
          </Box>
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
        <Image $sx={hookSc('purchaseProductImg')}
        src={info.asset} />
        <ProductInfo {...info} sm />
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
export const PurchaseInfoCard = ({
  heading,
  link,
  copy,
  noChange,
  changeLink,
  children,
  containerSx,
}: {
  heading: string
  link: string
  copy?: string
  noChange?: boolean
  changeLink?: string
  children?: React.ReactNode
  containerSx?: CssProps
}) => {
  const { hookSc } = useThemeHelper()
  {/* Change thing up here */}
  return (
    <Box $sx={hookSc('purchaseInfoCard')}>
      <Maybe condition={noChange !== true}>
        <Anchor $sx={hookSc('purchaseInfoEdit')}>
          {changeLink || 'Change'}
        </Anchor>
      </Maybe>
      <Heading level={4} $sx={hookSc('purchaseInfoHeading')}>
        {heading}
      </Heading>
      <Maybe condition={copy !== undefined}>
        <Copy $sx={hookSc('purchaseInfoCopy')}>
          {copy}
        </Copy>
      </Maybe>
      <Anchor $sx={hookSc('purchaseInfoLink')}>
        {link}
      </Anchor>
      <Box $sx={{
        ...hookSc('purchaseInfoContainer'),
        ...containerSx,
        }}>
        {children}
      </Box>
    </Box>
  )
}

export const FingeronTheButtonHorizontal = ({
  redButtonLabel = 'Place order',
  heading,
  legalese,
}: {
  redButtonLabel?: string
  heading: string
  legalese?: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('orderConfirmH')}>
      <Button $sx={hookSc('orderConfirmHButton')}>
        {redButtonLabel}
      </Button>
      <Flex col>
        <Heading level={4} $sx={hookSc('orderConfirmHHeading')}>
          {heading}
        </Heading>
        <Maybe condition={!!legalese}>
          <Copy 
            $sx={hookSc('orderConfirmHLegalese')}
          dangerouslySetInnerHTML={{
            __html: legalese || ''
          }} />
        </Maybe>
      </Flex>
    </Flex>
  )
}

export const FingerOnTheButtonVertical = ({
  redButtonLabel = 'Place order',
  legalese,
  lineItemProps
}: {
  redButtonLabel?: string
  legalese?: string
  lineItemProps: LineItemsProps
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex col $sx={hookSc('orderConfirmV')}>
      <Flex col $sx={hookSc('orderConfirmVTop')}>
        <Button $sx={hookSc('orderConfirmVButton')}>
          {redButtonLabel}
        </Button>
        <Maybe condition={!!legalese}>
          <Copy $sx={hookSc('orderConfirmVLegalese')} dangerouslySetInnerHTML={{
            __html: legalese || ''
          }} />
        </Maybe>
      </Flex>
      <Box $sx={hookSc('orderConfirmVBottom')}>
        <LineItems {...lineItemProps} />
      </Box>
    </Flex>
  )
}

export const IgnoreThisCard = ({
  html
}: {
  html: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('legaleseCard')}>
      <Copy $sx={hookSc('legalese')}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </Box>
  )
}

