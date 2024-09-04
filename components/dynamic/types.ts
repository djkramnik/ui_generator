import { CSSProperties } from "react"

export type TextNode = { 
  tagName: 'text',
  content: string
}

export type DomNode = {
  tagName: string
  children: Array<StyleNode>
  html?: string
  style: CSSProperties
  styleStr: string
  attributes?: Record<string, string>
  className: string
} 

export type StyleNode = DomNode | TextNode