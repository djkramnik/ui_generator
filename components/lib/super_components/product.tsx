import { useEffect, useState } from "react"
import { sizedArray } from "../../../util"
import { useThemeHelper } from "../../hooks"
import { CssProps, sxToStyle } from "../../theme"
import { ChimericIcon, Copy, Heading, Icon, Maybe, Image, Anchor } from "../atomics"
import { Box, Flex, Span, TwoCol } from "../layout"
import { shuffle } from "../../utils"

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

export type ProductInfoProps = {
  tags?: string[]
  star?: {
    max?: number
    rating: number
    reviews?: number
    mui?: boolean
  }
  price: number
  title: string,
  children?: React.ReactNode[]
  description?: string
  sm?: boolean
}

export const ProductInfo = ({
  tags,
  star,
  price,
  title,
  children,
  description,
  sm,
}: ProductInfoProps) => {
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
          <Starz mui={star?.mui} rating={star?.rating ?? 0}

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

export const ProductCard = ({
  heading,
  link,
}: {
  heading: string
  link?: string
}) => {
  const { theme, hookSc } = useThemeHelper()
  const [randomProducts, setRandomProducts]
    = useState<string[] | null>(null)

  const allProducts: string[] = sizedArray(31)
    .map((_, index) => {
      return `product${index + 1}.jpg`
    })
  useEffect(() => {
    if (randomProducts !== null) {
      return
    }

    setRandomProducts(
      shuffle(allProducts).slice(0, 4)
    )
  }, [randomProducts, setRandomProducts])

  if (randomProducts === null) {
    return null
  }

  return (
    <Flex col $sx={{
      padding: '20px',
      gap: theme.spacing.gap,
      backgroundColor: theme.palette.white,
      width: '320px'
    }}>
      <Heading level={4} $sx={{
        fontWeight: 'bold'
      }}>
        {heading}
      </Heading>
      <Flex $sx={{
        flexWrap: 'wrap',
      }}>
        {
          randomProducts.map((product, index) => {
            return (
              <Box $sx={{ width: '50%', padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  $sx={{ height: '160px' }}
                  src={`/products/${product}`}
                  key={index}
                />
              </Box>
            )
          })
        }
      </Flex>
      <Maybe condition={link !== undefined}>
        <Anchor>
          {link}
        </Anchor>
      </Maybe>
    </Flex>
  )
} 