import { AccordionDetails, AccordionSummary } from "@mui/material";
import { colors, CssProps } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Heading } from "../heading"
import MuiAccordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DefaultIcon = ({ open }: { open: boolean }) => {
  return (
    <i style={{ fontSize: '18px' }}
    className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}
    />
  )
}

type AccordionProps = {
  heading: string
  open?: boolean
  headingContainerSx?: CssProps
  headingSx?: CssProps
  boxSx?: CssProps
  containerSx?: CssProps
  children?: React.ReactNode
  icon?: React.ReactNode
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
}: AccordionProps) => {
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

export const ChimericAccordion = (props: AccordionProps & {
  mui?: boolean
}) => {
  const { children, mui, open, ...rest } = props
  if (mui) {
    return (
      <MuiAccordion defaultExpanded={open === true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {rest.heading}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </MuiAccordion>
    )
  }
  return (
    <AccordionSection {...rest}>
      {children}
    </AccordionSection>
  )
}