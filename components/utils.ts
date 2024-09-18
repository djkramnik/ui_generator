import { CSSProperties } from "react"
import { CssProps, Theme } from "./theme"

export const pick = <T extends object = object>(obj: T, keys: string[]): Partial<T> => {
  return Object.entries(obj)
    .reduce((acc, [key, val]) => {
      if (keys.includes(key)) {
        return {
          ...acc,
          [key]: val,
        }
      }
      return acc
    }, {})
}

export const sxToStyle = ($sx: CssProps): CSSProperties => {
  return Object.entries($sx).reduce((acc, [k,v]) => {
    return {
      ...acc,
      ...(
        typeof v === 'string'
          ? {[k] : v}
          : {}
      ),
    }
  }, {})
}

export const parseVariant = ($variant: string, theme: Theme): CssProps => {
  switch($variant) {
    case 'pill':
      return {
        borderRadius: '24px',
        fontWeight: '700',
        padding: '12px 18px'
      }
    case 'secondary':
      return {
        fontFamily: theme.typography.secondaryff 
      }
    default:
      return {

      }
  }
}

export const parseVariants = ($variant: string[], theme: Theme): CssProps => {
  return $variant.reduce((acc, s) => {
    return {
      ...acc,
      ...parseVariant(s, theme),
    }
  }, {})
}