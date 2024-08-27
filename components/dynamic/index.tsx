import React, { createElement } from "react"
import { CSSProperties } from "react"

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
} 

type StyleNode = DomNode | TextNode

export const DynamicComponent = ({
  graph
}: {
  graph: StyleNode
}) => {
  const { tagName } = graph
  if (tagName === 'text') {
    return (graph as TextNode).content
  }

  return createElement(
    tagName,
    {$sx: (graph as DomNode).style},
    ...(
      (graph as DomNode).children
        .map((c, index) => {
          return <DynamicComponent graph={c} key={index} />
        })
    )
  )
}
