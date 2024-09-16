import { CSSProperties } from "react"
import { CssProps } from "./theme"

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