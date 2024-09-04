import React, { createElement } from "react"
import { CSSProperties } from "react"
import { Box } from "../lib"
import { CssProps } from "../theme"
import { useTheme } from "styled-components"
import { Anchor, Button, Input } from "../lib/atomics"
import { DomNode, StyleNode, TextNode } from "./types"

const toSx = (cssProperties: CSSProperties): CssProps => {
  return Object.entries(cssProperties)
    .reduce((acc, [k, v]) => {
      return {
        ...acc,
        [k]: String(v)
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
  graph,
}: {
  graph: StyleNode
}) => {
  const theme = useTheme()
  // type assert for convenience.  runtime if statement to validate (tagName === text)
  const node = graph as DomNode
  const { tagName } = node
  if (tagName === 'text') {
    return (graph as TextNode).content
  }
  const { attributes } = node
  const element = getElement(tagName)
  if (element === null) {
    return null
  }
  return createElement(
    element,
    {
      $sx: toSx((graph as DomNode).style),
      theme,
      ...attributes,
      ...(
        typeof node.html === 'string'
          ? {
            dangerouslySetInnerHTML: {
              __html: node.html
            }
          }
          : undefined
      ),
    },
    ...(
      (graph as DomNode).children
        .map((c, index) => {
          return <DynamicComponent graph={c} key={index} />
        })
    )
  )
}
