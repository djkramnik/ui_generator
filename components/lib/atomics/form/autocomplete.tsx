import { CssProps, shadows } from "../../../theme"
import { Box } from "../../layout"
import { InputProps, InputWithIcon } from "./input"

export const Autocomplete = ({
  inputProps,
  containerSx,
  children,
  open,
}: {
  inputProps?: Omit<InputProps, 'theme'>
  containerSx?: CssProps
  children?: React.ReactNode
  open?: boolean
}) => {
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