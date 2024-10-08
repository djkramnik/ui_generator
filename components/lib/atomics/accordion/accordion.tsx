import { CSSProperties } from 'react'
import { AccordionDetails, AccordionSummary } from '@mui/material'
import { CssProps } from '../../../theme'
import { Box } from '../../layout'
import { Heading } from '../heading'
import MuiAccordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  getComponentStyles,
  mergeStyles,
  sxToStyle,
} from '../../../theme/variants'
import { useTheme } from 'styled-components'

const DefaultIcon = ({ 
  open,
  style,
}: { open: boolean, style?: CSSProperties }) => {
  return (
    <i
      style={{ fontSize: '18px', ...style }}
      className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}
    />
  )
}

export type AccordionProps = {
  heading: string
  open?: boolean
  summarySx?: CssProps
  headingSx?: CssProps
  rootSx?: CssProps
  expandedSx?: CssProps
  children?: React.ReactNode
  icon?: React.ReactNode
  summaryVariant?: string | string[]
  rootVariant?: string | string[]
  headingVariant?: string | string[]
  expandedVariant?: string | string[]
  iconStyle?: CSSProperties
}

export const AccordionSection = ({
  heading,
  open,
  summarySx,
  headingSx,
  rootSx,
  expandedSx,
  children,
  icon,
  summaryVariant,
  rootVariant,
  headingVariant,
  expandedVariant,
  iconStyle,
}: AccordionProps) => {
  const theme = useTheme()

  const rootDiff = mergeStyles({
    theme,
    $variant: rootVariant,
    component: 'accordionContainer',
  })

  const summaryDiff = mergeStyles({
    theme,
    $variant: summaryVariant,
    component: 'accordionSummary',
  })

  const headingDiff = mergeStyles({
    theme,
    $variant: headingVariant,
    component: 'accordionHeading',
  })

  const expandedDiff = mergeStyles({
    theme,
    $variant: expandedVariant,
    component: 'accordionExpanded',
  })

  return (
    <Box
      $sx={{
        ...rootDiff,
        ...rootSx,
      }}
    >
      <Box
        $sx={{
          ...summaryDiff,
          ...summarySx,
        }}
      >
        <Heading
          level={3}
          $sx={{
            ...headingDiff,
            ...headingSx,
          }}
        >
          {heading}
        </Heading>
        {icon ?? <DefaultIcon open={open === true} style={iconStyle} />}
      </Box>
      {open ? (
        <Box
          $sx={{
            ...expandedDiff,
            ...expandedSx,
          }}
        >
          {children}
        </Box>
      ) : null}
    </Box>
  )
}

export const ChimericAccordion = (
  props: AccordionProps & {
    mui?: boolean
  }
) => {
  const theme = useTheme()
  const {
    children,
    mui,
    open,
    icon,
    summaryVariant,
    expandedVariant,
    headingVariant,
    ...rest
  } = props

  if (mui) {
    const summaryDiff = mergeStyles({
      theme,
      $variant: summaryVariant,
      component: 'accordionSummary',
    })
    const summaryHeadingDiff = mergeStyles({
      theme,
      $variant: headingVariant,
      component: 'accordionHeading',
    })

    const expandedDiff = mergeStyles({
      theme,
      $variant: expandedVariant,
      component: 'accordionExpanded',
    })

    return (
      <MuiAccordion
        defaultExpanded={open === true}
        sx={{
          ...sxToStyle({
            ...getComponentStyles('accordionContainer', theme),
          }),
        }}
      >
        <AccordionSummary
          style={{
            ...sxToStyle({
              ...summaryDiff,
              ...summaryHeadingDiff,
            }),
          }}
          expandIcon={icon ?? <ExpandMoreIcon style={rest.iconStyle} />}
        >
          {rest.heading}
        </AccordionSummary>
        <AccordionDetails
          style={{
            ...sxToStyle(expandedDiff),
          }}
        >
          {children}
        </AccordionDetails>
      </MuiAccordion>
    )
  }
  return (
    <AccordionSection
      summaryVariant={summaryVariant}
      expandedVariant={expandedVariant}
      headingVariant={headingVariant}
      open={open}
      icon={icon}
      {...rest}
    >
      {children}
    </AccordionSection>
  )
}
