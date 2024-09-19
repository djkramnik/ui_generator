import { useTheme } from "styled-components"
import { CssProps } from "../../../theme"
import { getComponentStyles } from "../../../utils"
import { Box } from "../../layout"
import { Icon } from "../icon"
import { InputProps, InputWithIcon } from "./input"
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material"

type AutocompleteProps = {
  inputProps?: Omit<InputProps, 'theme'>
  expandedSx?: CssProps
  children?: React.ReactNode
  open?: boolean
}

export const Autocomplete = ({
  inputProps,
  expandedSx,
  children,
  open,
}: AutocompleteProps) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getComponentStyles('autoCompleteContainer', theme),
    }}>
    <InputWithIcon 
      icon={Icon.search} 
      inputProps={{
        ...inputProps,
        $sx: {
          ...getComponentStyles('autoCompleteInput', theme),
          ...inputProps?.$sx,
        }
      }}
      iconStyles={{
        color: 'inherit'
      }} />
      {
        open
          ? (
            <Box $sx={{
              ...getComponentStyles('autoCompleteExpanded', theme),
              ...expandedSx,
            }}>
              {
                children
              }
            </Box>
          )
          : null
      }
    </Box>
  )
}

export const ChimericAutocomplete = (props: AutocompleteProps & {
  mui?: boolean
  options?: {
    label: string
    id: number
  }[] 
}) => {
  const { children, mui, options, open, ...rest } = props
  if (mui) {
    return (
      <MuiAutocomplete
        open={open}
        options={options ?? []}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    )
  }
  return (
    <Autocomplete {...rest}>
      {children}
    </Autocomplete>
  )
}