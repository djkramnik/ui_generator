import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { ChimericDropdown, ChimericDropdownProps, ChimericInput, ChimericInputProps, LabelizeIt, WithErrata } from "../atomics"
import { Box, Flex } from "../layout"

// i.e. age
export const SmallInput = (props: ChimericInputProps) => {
  const theme = useTheme()
  return (
    <ChimericInput
      {...props}
      $sx={{
        ...props.$sx,
        ...getSuperComponentStyles(
          'smallInput',
          theme
        )
      }}
    />
  )
}

export const SmallDropdown = (props: ChimericDropdownProps) => {
  const theme = useTheme()
  return (
    <ChimericDropdown
      {...props}
      selectSx={{
        ...props.selectSx,
        ...getSuperComponentStyles(
          'smallInput',
          theme,
        )
      }}
    />
  )
}

export const CreditCardDetails = ({
  mui,
  ccPlaceholder = 'Credit Card Number',
  ccLabel = 'Credit Card No.*',
  ccError,
  expiryLabel = 'MM/YY',
  cscLabel = 'CVV'
}: {
  mui?: boolean
  ccPlaceholder?: string
  ccLabel?: string
  ccError?: string,
  expiryLabel?: string
  cscLabel?: string
}) => {
  const theme = useTheme()

  const CcInput = () => (
    <LabelizeIt label={ccLabel}>
      <ChimericInput
        placeholder={ccPlaceholder}
      />
  </LabelizeIt>
  )
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'ccDetails',
        theme,
      )
    }}>
      <Box $sx={{ flexGrow: '1'}}>
        {
          ccError
            ? (
              <WithErrata errorMessage={ccError}>
                <CcInput />
              </WithErrata>
            )
            : <CcInput />
        }
      </Box>
      <LabelizeIt label={expiryLabel}>
        <SmallInput placeholder={expiryLabel} />
      </LabelizeIt>
      <LabelizeIt label={cscLabel}>
        <SmallInput placeholder={cscLabel} />
      </LabelizeIt>
    </Flex>
  )
}
