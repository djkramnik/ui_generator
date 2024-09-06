import { CSSProperties } from 'react'

export type Dict = {[key: string]: string}

export type StyleFilter = (key: string) => boolean

function toCamelCase(s: string): string {
  return s.split('-').map((s, index) => {
    if (!s) {
      return ''
    }
    return index > 0
      ? `${s[0].toUpperCase()}${s.slice(1)}`
      : s
  }).join('')
}

function styleMapToFilteredObj(
  styleMap: StylePropertyMapReadOnly,
  filter?: StyleFilter
): Dict {
  let obj: Dict = {}

  // @ts-ignore
  for(const [k,v] of styleMap) {
    if (!filter || filter(k)) {
      obj[k] = String(v)
    }
  }
  return obj
}

function objToStyleStr(obj: Dict): string {
  return Object.entries(obj).reduce((acc, [k,v]) => {
    return acc.concat(`${k}:${v};`)
  }, '')
}

function objToCss(obj: Dict): CSSProperties {
  return Object.entries(obj).reduce((acc, [k,v]) => {
    return {
      ...acc,
      [toCamelCase(k)]: String(v)
    }
  }, {} as CSSProperties)
}

function createIframe() {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'display: none')
  document.body.appendChild(iframe)
  return iframe
}

function getIframeStyleMap(el: HTMLElement, iframe: HTMLIFrameElement): StylePropertyMapReadOnly | null {
  const tagName = el.tagName
  if (!tagName) {
    return null
  }
  const iframeDoc = iframe.contentDocument!
  let target = iframeDoc.querySelector(tagName)
  
  if (!target) {
    target = iframeDoc?.createElement(tagName)
    iframeDoc.body.appendChild(target!)
  }
  return target.computedStyleMap()
}

function getDefaultStyles({ 
  el,
  iframe,
  filter = () => true
}: {
  el: HTMLElement
  iframe: HTMLIFrameElement
  filter?: StyleFilter
}) {
  const styleMap = getIframeStyleMap(el, iframe)
  if (!styleMap) {
    return null
  }
  return styleMapToFilteredObj(styleMap, filter)
}

function getUniqueStylesFactory({
  filter,
  existingIframe,
}: {
  filter?: (key: string) => boolean,
  existingIframe?: HTMLIFrameElement
}): {
  iframe: HTMLIFrameElement
  getUniqueStyles: (el: HTMLElement) =>  (Dict | null)
} {
  const iframe = existingIframe ?? createIframe()
  
  function getUniqueStyles(el: HTMLElement): Dict | null {
    const defaultStyles = getDefaultStyles({ el, iframe, filter })
    if (!defaultStyles) {
      return null
    }

    let currentStyles = styleMapToFilteredObj(el.computedStyleMap(), filter)
    
    currentStyles.width = el.clientWidth + 'px'
    currentStyles.height = el.clientHeight + 'px'
    
    return Object.entries(currentStyles).reduce((acc, [k, v]) => {
      if (currentStyles[k] === defaultStyles[k]) {
        return acc
      }
      return {
        ...acc,
        [k]: v
      }
    }, {} as Dict) as Dict
  }

  return {
    iframe,
    getUniqueStyles
  }
}

type StyleNode = {
  tagName: string
  children: Array<StyleNode>
  html?: string
  style: CSSProperties
  styleStr: string
  attributes: Record<string, string>
  className: string
} | { 
  tagName: 'text',
  content: string
}

function buildUniqueStylesGraph({ 
  el,
  getGraph
}: {
  el: HTMLElement
  getGraph: (el: HTMLElement) =>  (Dict | null)
}) {
  if (el.nodeType !== 1 && el.nodeType !== 3) {
    return null
  }
  if (el.nodeType === 3) {
    return {
      tagName: 'text',
      content: el.textContent,
    } as StyleNode
  }

  const customStyles = getGraph(el) ?? {}
  const node: StyleNode = {
    tagName: el.tagName.toUpperCase(),
    children: [] as StyleNode[],
    styleStr: objToStyleStr(customStyles),
    style: objToCss(customStyles),
    attributes: {},
    className: el.className
  }
  if (el.tagName === 'SVG') {
    node.html = el.innerHTML
    return node
  }
  // adding attributes where relevant....
  // for images, we won't be copying the actual src content for now...
  // but upstream from here, we add explicit width and height css properties for images
  // we use a placeholder image of a solid color for now
  if (el.tagName === 'INPUT') {
    const placeholder = el.getAttribute('placeholder')
    if (placeholder) {
      node.attributes.placeholder = placeholder
    }
  } else if (el.tagName === 'IMG' || el.tagName === 'IMAGE') {
    node.attributes.src = '/public/solid-color.jpg'
  } else if (el.tagName === 'SVG') {
    node.attributes.fill = el.getAttribute('fill') ?? 'initial'
    node.attributes.stroke = el.getAttribute('stroke') ?? 'currentColor'
  }

  if (el.hasChildNodes()) {
    el.childNodes.forEach(childNode => {
      if (!childNode) {
        return
      }
      const graph = buildUniqueStylesGraph( {el: childNode as HTMLElement, getGraph })
      if (!graph) {
        return
      }
      node.children.push(graph)
    })
  }
  
  return node
}

export {
  styleMapToFilteredObj,
  objToStyleStr,
  createIframe,
  getIframeStyleMap,
  getDefaultStyles,
  getUniqueStylesFactory,
  buildUniqueStylesGraph,
}