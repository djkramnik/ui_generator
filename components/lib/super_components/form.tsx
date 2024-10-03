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

  const CcInput = ({ mui }: { mui?: boolean }) => (
    <LabelizeIt label={ccLabel}>
      <ChimericInput
        mui={mui}
        placeholder={ccPlaceholder}
      />
  </LabelizeIt>
  )
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'multiInputRow',
        theme,
      )
    }}>
      <Box $sx={{ flexGrow: '1'}}>
        {
          ccError
            ? (
              <WithErrata errorMessage={ccError}>
                <CcInput mui={mui} />
              </WithErrata>
            )
            : <CcInput mui={mui} />
        }
      </Box>
      <LabelizeIt label={expiryLabel}>
        <SmallInput mui={mui} placeholder={expiryLabel} />
      </LabelizeIt>
      <LabelizeIt label={cscLabel}>
        <SmallInput mui={mui} placeholder={cscLabel} />
      </LabelizeIt>
    </Flex>
  )
}

export const PersonDetails = ({
  mui,
  firstName = 'First Name',
  lastName = 'Last Name',
  middleName,
  prefixOptions,
  postfix,
  prefixOpen,
  prefixArtificial,
}: {
  mui?: boolean
  firstName?: string
  lastName?: string
  middleName?: string
  prefixOptions?: string[]
  postfix?: string
  prefixOpen?: boolean
  prefixArtificial?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'multiInputRow',
        theme,
      )
    }}>
      {
        prefixOptions
          ? (
            <LabelizeIt label="Prefix">
              <SmallDropdown
                options={prefixOptions}
                open={prefixOpen}
                artificial={prefixArtificial}
              />
            </LabelizeIt>
          )
          : null
      }
      <LabelizeIt label={firstName}>
        <ChimericInput
          mui={mui}
          placeholder={firstName}
        />
      </LabelizeIt>
      {
        middleName
          ? (
            <LabelizeIt label={middleName}>
              <ChimericInput
                mui={mui}
                placeholder={middleName}
              />
            </LabelizeIt>
          )
          : null
      }
      <LabelizeIt label={lastName}>
        <ChimericInput
          mui={mui}
          placeholder={lastName}
        />
      </LabelizeIt>
      {
        postfix
          ? (
            <LabelizeIt label={postfix}>
              <SmallInput
                mui={mui}
                placeholder={postfix}
              />
            </LabelizeIt>
          )
          : null
      }
    </Flex>
  )
}

// randomized payment details form
// randomized 
// make sure labelize it can be rendered horizontally
