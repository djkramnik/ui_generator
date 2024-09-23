import { CSSProperties } from "react"
import { CssProps, Theme } from "./types"
import { shadows } from "."

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
    case 'fullwidth':
      return {
        width: '100%'
      }
    case 'border': 
      return {
        border: '2px solid currentColor'
      }
    case 'borderless:b': {
      return {
        borderBottom: 'none'
      }
    }
    case 'borderless:l': {
      return {
        borderLeft: '0'
      }
    }
    case 'borderless:r': {
      return {
        borderRight: '0'
      }
    }
    case 'borderless:t': {
      return {
        borderTop: '0'
      }
    }
    case 'underline':
      return {
        textDecoration: 'underline'
      }
    case 'bold':
      return {
        fontWeight: 'bold'
      }
    case 'pill':
      return {
        borderRadius: '30px',
        padding: '12px 18px'
      }
    case 'secondary':
      return {
        fontFamily: theme.typography.secondaryff 
      }
    case 'secondarycolor':
      return {
        color: theme.palette.secondary,
      }
    case 'center':
      return {
        textAlign: 'center'
      }
    case 'white':
      return {
        color: theme.palette.white
      }
    case 'muted':
      return {
        color: theme.palette.grey
      }
    case 'transparent':
      return {
        backgroundColor: 'transparent'
      }
    case 'bgc:secondary':
      return {
        backgroundColor: theme.palette.secondary,
        color: theme.palette.copy
      }
    case 'shadow':
      return {
        boxShadow: shadows.w3Schools
      }
    case 'h1':
      return {
        ...theme.components.h1,
      }
    case 'h2':
      return {
        ...theme.components.h2,
      }
    case 'h3':
      return {
        ...theme.components.h3,
      }
    case 'h4':
      return {
        ...theme.components.h4,
      }
    case 'h5':
      return {
        ...theme.components.h5,
      }
    default:
      console.error('invalid variant: ', $variant)
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

export const getComponentStyles = (s: keyof Theme['components'], theme: Theme): CssProps => {
  return theme.components[s]
}

export const mergeStyles = ({
  theme,
  component,
  $variant,
}: {
  theme: Theme
  component?: keyof Theme['components']
  $variant?: string | string[]
}): CssProps => {
  const variantDiff = typeof $variant === 'string'
  ? parseVariant($variant, theme)
  : (
    Array.isArray($variant)
      ? parseVariants($variant, theme)
      : {}
  )

const componentDiff = component
  ? getComponentStyles(component, theme)
  : {}

  return {
    ...componentDiff,
    ...variantDiff,
  }
}