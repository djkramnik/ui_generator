import React, { createElement } from "react"
import { CSSProperties } from "react"
import { Box } from "../lib"
import { CssProps } from "../theme"
import { useTheme } from "styled-components"
import { Anchor, Button, Input } from "../lib/atomics"

type TextNode = { 
  tagName: 'text',
  content: string
}

type DomNode = {
  tagName: string
  children: Array<StyleNode>
  html?: string
  style: CSSProperties
  styleStr: string
  attributes?: Record<string, string>
} 

type StyleNode = DomNode | TextNode

const toSx = (cssProperties: CSSProperties): CssProps => {
  return Object.entries(cssProperties)
    .reduce((acc, [k, v]) => {
      return {
        ...acc,
        k: String(v)
      }
    }, {} as CssProps)
}

// not any.... a component that accepts $sx and theme, or null
const getElement = (tagName: string): any => {
  switch(tagName) {
    case 'a':
      return Anchor
    case 'button':
      return Button
    case 'input':
      return Input
    case 'img':
    case 'image':
      return Image
    case 'svg':
      return 'svg'
    case 'script':
    case 'link':
      return null
    default:
      return Box
  }
}

export const DynamicComponent = ({
  graph
}: {
  graph: StyleNode
}) => {
  const theme = useTheme()
  const { tagName } = graph
  if (tagName === 'text') {
    return (graph as TextNode).content
  }
  const attributes = graph
  const element = getElement(tagName)
  if (element === null) {
    return null
  }
  return createElement(
    element,
    {$sx: toSx((graph as DomNode).style), theme, ...attributes},
    ...(
      (graph as DomNode).children
        .map((c, index) => {
          return <DynamicComponent graph={c} key={index} />
        })
    )
  )
}
