import { sizedArray } from "../../../util"
import { useThemeHelper } from "../../hooks"
import { CssProps, sxToStyle } from "../../theme"
import { ChimericIcon, Copy, Heading, Icon, Maybe } from "../atomics"
import { Box, Flex, Span } from "../layout"

const padCents = (n: number): string => {
  if (n < 10) {
    return `0${n}`
  }
  return String(n)
}

export const Price = ({
  symbol = '$',
  dollars,
  cents,
  currency,
  priceSx,
}: {
  dollars: number
  cents?: number
  currency?: string
  symbol?: string
  priceSx?: CssProps
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={{
      ...hookSc('price'),
      ...priceSx
    }}>
      <Span $sx={{
        ...hookSc('priceSymbol')
      }}>
        {symbol}
      </Span>
      <Span $sx={{
        ...hookSc('priceDollars')
      }}>
        {dollars}
      </Span>
      <Maybe condition={cents !== undefined}>
        <Span $sx={{
          ...hookSc('priceCents')
        }}>
          {'.'}{padCents(cents!)}
        </Span>
      </Maybe>
      <Maybe condition={currency !== undefined}>
        <Span $sx={{
          ...hookSc('priceCurrency')
        }}>
          &nbsp;{currency}
        </Span>
      </Maybe>
    </Box>
  )
}

export const Starz = ({
  max = 5,
  rating,
  mui,
}: {
  max?: number
  rating: number
  mui?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex row $sx={{
      ...hookSc('starRating')
    }}>
      {
        sizedArray(max)
          .map((_, index) => {
            const type = ((index + 1) <= rating)
              ? 'starRatingFilled'
              : 'starRatingEmpty'
            return (
              <ChimericIcon
                mui={mui === true}
                key={index}
                icon={Icon.star}
                iconStyle={{
                  ...sxToStyle({
                    ...hookSc(type)
                  })
                }}
              />
            )
          })
      }
    </Flex>
  )
}

export const ProductInfo = ({
  tags,
  star,
  price,
  title,
  children,
  description,
  sm,
}: {
  tags?: string[]
  star?: {
    max?: number
    rating: number
    reviews?: number
  }
  price: number
  title: string,
  children?: React.ReactNode[]
  description?: string
  sm?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  const dollars = parseInt(String(price))
  const cents = Number((price - dollars).toFixed(2)) * 100
  return (
    <Flex col $sx={{
      ...hookSc('product'),
      ...(sm ? hookSc('productSm') : {})
    }}>
      {children?.[0] ?? null}
      <Flex col>
        <Heading level={3} $sx={{
          ...hookSc('productName')
        }}>
          {title}
        </Heading>
        <Maybe condition={description}>
          <Copy $sx={{
            ...hookSc('productMeta')
          }}>
            {description}
          </Copy>
        </Maybe>
      </Flex>
      <Maybe condition={tags}>
        <Flex row gap="6px" wrap>
          {
            tags?.map(t => {
              return (
                <Box key={t} $sx={{
                  ...hookSc('productTag')
                }}>
                  {t}
                </Box>
              )
            })
          } 
        </Flex>
      </Maybe>
      <Maybe condition={star}>
        <Flex row $sx={{
            ...hookSc('productRating')
          }}>
          <Starz rating={star?.rating ?? 0}

            {
              ...(
                star?.max
                  ? {
                    max: star?.max
                  }
                  : {}
              )
            }
          />
          <Maybe condition={star?.reviews}>
            <Copy $sx={{
              position: 'relative',
              top: '2px',
              fontSize: '0.8em'
            }}>{star?.reviews} Reviews</Copy>
          </Maybe>
        </Flex>
      </Maybe>
      {children?.[1] ?? null}
      <Flex col>
        <Price
          dollars={dollars}
          cents={cents}
          priceSx={hookSc('productPrice')}
        />
      </Flex>
      {children?.[2] ?? null}
    </Flex>
  )
}