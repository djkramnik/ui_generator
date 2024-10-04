import { useThemeHelper } from "../../hooks"
import { Maybe } from "../atomics"
import { Box, Span } from "../layout"

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