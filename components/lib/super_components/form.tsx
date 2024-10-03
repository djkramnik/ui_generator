import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { ChimericDropdown, ChimericDropdownProps, ChimericInput, ChimericInputProps, LabelizeIt, WithErrata } from "../atomics"
import { Box, Flex } from "../layout"
import { useState } from "react"

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

// gender? 
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

// address details
export const AddressDetails = ({
  mui,
  address = 'Address',
  address2,
  postalCode = 'Postal Code',
  provinceOptions,
  provinceLabel = 'Province',
  unit,
  bigProvince,
}: {
  mui?: boolean
  address?: string
  address2?: string
  postalCode?: string
  provinceLabel?: string
  provinceOptions?: string[]
  unit?: string
  bigProvince?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'multiInputRow',
        theme,
      ),
      justifyContent: 'flex-start'
    }}>
      <Box $sx={{
        minWidth: '50%',
        flexGrow: '1'
      }}>
        <LabelizeIt label={address}>
          <ChimericInput
            mui={mui}
            placeholder={address}
          />
        </LabelizeIt>
      </Box>
      {
        address2
          ? (
            <Box $sx={{
              minWidth: '45%'
            }}>
             <LabelizeIt label={address2}>
              <ChimericInput
                mui={mui}
                placeholder={address2}
              />
            </LabelizeIt>
            </Box>
          )
          : null
      }
      {
        unit
          ? (
            <LabelizeIt label={unit}>
              <SmallInput mui={mui} placeholder={unit} />
            </LabelizeIt>
          )
          : null
      }
      <LabelizeIt label={postalCode}>
        <ChimericInput
          mui={mui}
          placeholder={postalCode}
        />
      </LabelizeIt>
      {
        provinceOptions
          ? (
            <LabelizeIt label={provinceLabel}>
              {
                bigProvince
                  ? (
                    <ChimericDropdown
                      options={provinceOptions}
                    />
                  )
                  : (
                    <SmallDropdown
                      options={provinceOptions}
                    />
                  )
              }
            </LabelizeIt>
          )
          : null
      }
    </Flex>
  )
}


type FormDomain =
  | 'application'
  | 'payment'
  | ''

type MultilineInput =
  | 'payment' | 'address' | 'person'

// randomized form 
export const RandomizedForm = ({
  withMultiline,
  domain,
  heading,
  checkboxSection,
  buttonOneLabel = 'Save',
  buttonTwoLabel,
}: {
  withMultiline?: boolean
  domain?: FormDomain
  heading?: string
  checkboxSection?: React.ReactNode
  buttonOneLabel?: string
  buttonTwoLabel?: string
}) => {
  const theme = useTheme()
  const [
    multilineRandom,
    setMultilineRandom
  ] = useState<MultilineInput | null>(null)
  const [
    fields,
    setFields,
  ] = useState<string[]>([])
  const [
    dropdownIndex,
    setDropdownIndex
  ] = useState<number[]>([])
  const [
    textareaIndex,
    setTextAreaIndex
  ] = useState<number[]>([])

  return (
    <form>
      <Flex $sx={{
        ...getSuperComponentStyles('form', theme)
      }}>
        <Flex $sx={{
          ...getSuperComponentStyles(
            'formButtons',
            theme,
          )
        }}>

        </Flex>
      </Flex>
    </form>
  )
}


// make sure labelize it can be rendered horizontally
