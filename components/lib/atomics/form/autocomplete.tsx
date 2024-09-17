import { CssProps, shadows } from "../../../theme"
import { Box } from "../../layout"
import { InputProps, InputWithIcon } from "./input"
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material"

type AutocompleteProps = {
  inputProps?: Omit<InputProps, 'theme'>
  containerSx?: CssProps
  children?: React.ReactNode
  open?: boolean
}

export const Autocomplete = ({
  inputProps,
  containerSx,
  children,
  open,
}: AutocompleteProps) => {
  return (
    <Box $sx={{
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content'
    }}>
    <InputWithIcon 
      icon="search" 
      inputProps={inputProps}
      iconStyles={{
        color: 'inherit'
      }} />
      {
        open
          ? (
            <Box $sx={{
              position: 'absolute',
              top: `calc(100% + 5px)`,
              left: '0',
              minWidth: '100%',
              height: 'auto',
              borderRadius: '0.25rem',
              padding: '6px',
              backgroundColor: '#fff',
              boxShadow: shadows.card,
              ...containerSx
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