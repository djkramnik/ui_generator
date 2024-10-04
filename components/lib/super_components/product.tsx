import { sizedArray } from "../../../util"
import { useThemeHelper } from "../../hooks"
import { sxToStyle } from "../../theme"
import { ChimericIcon, Icon, Maybe } from "../atomics"
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
}: {
  dollars: number
  cents?: number
  currency?: string
  symbol?: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={{
      ...hookSc('price')
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