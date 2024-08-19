import { CSSProperties } from "react"
import { BreakpointsType, CssProps, ResponsiveMixin } from "./types"

type GroupedStyles = Partial<Record<keyof BreakpointsType, string>>

export const getResponsiveStylesFactory = (breakpoints: BreakpointsType = {
  phonesm: '320px',
  phonelg: '568px',
  tabletsm: '741px',
  tabletlg: '1024px',
  desktoplg: '1300px',
}) => {
  
  return function getResponsiveStyles(props: CssProps): string {
    const groupedStyles: GroupedStyles
      = (Object.entries(props) as Array<[keyof CSSProperties, ResponsiveMixin]>)
        .reduce(
          (acc, [key, val]) => {
            return acc
          }, {
            phonesm: '',
            phonelg: '',
            tabletsm: '',
            tabletlg: '',
            desktoplg: '',
          } as GroupedStyles
      )
    return ''
  }
  
  function getMobileCss(key: keyof BreakpointsType, val: string): string {
    return `
      @media only screen and (min-width: ${breakpoints[key]}) {
        ${val}
      }
    `
  }
}