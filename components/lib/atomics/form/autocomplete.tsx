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
  open?: boolean
  options: string[]
  noSummarize?: boolean
}

export const Autocomplete = ({
  inputProps,
  expandedSx,
  open,
  options,
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
                options.map((optionText, index) => {
                  return (
                    <Box $sx={{
                      padding: '4px 6px',
                      fontWeight: index === 0
                        ? 'bold'
                        : 'initial',
                      backgroundColor: index === 1
                        ? colors.antBlueLight
                        : 'transparent'
                    }}>
                      {movie}
                    </Box>
                  )
                })
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
}) => {
  const { mui, options, open, ...rest } = props
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
    <Autocomplete {...rest} open={open} options={options} />
  )
}