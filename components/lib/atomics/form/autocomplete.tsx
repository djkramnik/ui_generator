import { useTheme } from "styled-components"
import { CssProps } from "../../../theme"
import { getComponentStyles } from "../../../theme/variants"
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
  noSummarize,
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
                !noSummarize
                  ? (
                    <Box $sx={{
                      ...getComponentStyles('autoCompleteOption', theme),
                      ...getComponentStyles('autoCompleteResultSummary', theme),
                    }}>
                      {`Showing ${options.length} results of ${options.length}`}
                    </Box>
                  )
                  : null
              }

              {
                options.map((optionText, index) => {
                  return (
                    <Box $sx={{
                      ...getComponentStyles('autoCompleteOption', theme),
                      ...(index === 1 ? getComponentStyles('autoCompleteOptionSelected', theme) : {})
                    }}>
                      {optionText}
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