import { useThemeHelper } from "../../hooks"
import { sxToStyle } from "../../theme"
import { Copy } from "../atomics"
import { AccordionProps, ChimericAccordion } from "../atomics/accordion"
import { Flex } from "../layout"

type AccordionPartialProps = Pick<AccordionProps,
| 'heading'
| 'icon'>



export const AccordionSection = ({
  mui,
  accordions,
  openIndex,
  openText,
}: {
  mui?: boolean   
  accordions: AccordionPartialProps[]
  openIndex?: number
  openText?: string 
}) => {
  const { hookSc, hookC, theme } = useThemeHelper()
  return (
    <Flex $sx={hookSc('accordionSection')}>
      {
        accordions.map(({ heading, icon }, index) => {
          return (
            <ChimericAccordion
              iconStyle={
                sxToStyle(hookSc('accordionSectionIcon'))
              }
              mui={mui}
              key={index}
              heading={heading}
              icon={icon}
              open={typeof openIndex === 'number'
                ? index === openIndex
                : false
              }
              headingSx={hookC('h4')}
              summarySx={hookSc('accordionSectionSummary')}
              rootSx={hookSc('accordionSectionRoot')}
              children={index === openIndex
                ? (
                  <Copy $sx={hookSc('accordionChild')}>
                    {openText ?? ''}
                  </Copy>
                )
                : null
              }
            />
          )
        })
      }
    </Flex>
  )
}