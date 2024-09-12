import { colors, CssProps } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Heading } from "../heading"

const DefaultIcon = ({ open }: { open: boolean }) => {
  return (
    <i style={{ fontSize: '18px' }}
    className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}
    />
  )
}

export const AccordionSection = ({
  heading,
  open,
  headingContainerSx,
  headingSx,
  boxSx,
  containerSx,
  children,
  icon,
}: {
  heading: string
  open?: boolean
  headingContainerSx?: CssProps
  headingSx?: CssProps
  boxSx?: CssProps
  containerSx?: CssProps
  children?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <Box $sx={{
      border: '1px solid #aaa',
      ...boxSx,
    }}>
      <Box $sx={{ 
        backgroundColor: colors.amazonGrey,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 18px',
        ...headingContainerSx,
        }}>
        <Heading level={3}
          $sx={{
            ...headingSx
            }}>
          {heading}
        </Heading>
        {icon ?? <DefaultIcon open={open === true} />}
      </Box>
      {
        open
          ? (
            <Box $sx={{
              padding: '12px 18px',
              ...containerSx,
            }}>
            {children}
            </Box>
          )
          : null
      }
    </Box>
  )
}