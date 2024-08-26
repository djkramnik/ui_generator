
type Dict = {[key: string]: string}

type StyleFilter = (key: string) => boolean

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
    const currentStyles = styleMapToFilteredObj(el.computedStyleMap(), filter)
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
  style: string
} | { tagName: 'text' }

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
      tagName: 'text'
    } as StyleNode
  }
  const node: StyleNode = {
    tagName: el.tagName,
    children: [] as StyleNode[],
    style: objToStyleStr(getGraph(el) ?? {}) 
  }
  if (el.tagName === 'svg') {
    node.html = el.innerHTML
    return node
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