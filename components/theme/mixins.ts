import { CSSProperties } from "react"
import { BreakpointsType, CssProps, FineGrainedMixinList, ResponsiveMixin } from "./types"

type GroupedStyles = Record<keyof BreakpointsType, string>

export const getResponsiveStylesFactory = (breakpoints: BreakpointsType = {
  phonesm: null,
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
            if (!val) {
              return acc
            }
            if (typeof val === 'string') {
              return {
                ...acc,
                phonesm: `${acc.phonesm}${getCssStr(key, val)}`,
              }
            }
            if (Array.isArray(val)) {
              // mixin list 
              if (val.length < 4) {
                return {
                  ...acc,
                  phonesm: `${acc.phonesm}${getCssStr(key, val[0])}`,
                  tabletsm: `${acc.tabletsm}${getCssStr(key, val[1])}`,
                  tabletlg: val[2] ? `${acc.tabletlg}${getCssStr(key, val[2])}` : acc.tabletlg,
                }
              } else { // fine-grained list
                return {
                  ...acc,
                  phonesm: `${acc.phonesm}${getCssStr(key, val[0])}`,
                  phonelg: `${acc.phonelg}${getCssStr(key, val[1])}`,
                  tabletsm:  `${acc.tabletsm}${getCssStr(key, (val as FineGrainedMixinList)[2])}`,
                  tabletlg:  `${acc.tabletlg}${getCssStr(key, (val as FineGrainedMixinList)[3])}`,
                  desktoplg: val[4] ? `${acc.desktoplg}${getCssStr(key, val[4])}` : acc.desktoplg,
                }
              }

            }

            return acc
          }, {
            phonesm: '',
            phonelg: '',
            tabletsm: '',
            tabletlg: '',
            desktoplg: '',
          } as GroupedStyles
      )
    return (Object.keys(groupedStyles) as Array<keyof BreakpointsType>)
      .reduce((acc, key) => {
        if (key === 'phonesm') {
          return acc.concat(groupedStyles.phonesm)
        }
        if (!groupedStyles[key]) {
          return acc
        }
        return acc.concat(getMobileCss(key, groupedStyles[key]))
      }, '')
  }
  
  function getMobileCss(key: keyof BreakpointsType, val: string): string {
    return `
      @media only screen and (min-width: ${breakpoints[key]}) {
        ${val}
      }
    `
  }
}

function getCssStr(prop: keyof CSSProperties, val: string): string {
  return `${prop}: ${val};`
}