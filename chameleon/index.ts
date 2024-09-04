import { 
  buildUniqueStylesGraph,
  getDefaultStyles,
  createIframe,
  getUniqueStylesFactory,
  Dict,
  StyleFilter
} from "./util"

type StyleGraph = NonNullable<ReturnType<typeof buildUniqueStylesGraph>>

declare global {
  interface Window {
    chameleon: (el: HTMLElement) => StyleGraph | null | undefined
    getUniq: (el: HTMLElement) => (Dict | null)
    createIframe: () => HTMLIFrameElement
    getDefaultStyles: ({
      iframe,
      el,
      filter,
    }: {
      filter?: StyleFilter
      iframe: HTMLIFrameElement
      el: HTMLElement
    }) => (Dict | null)
  }
}

const { getUniqueStyles } = getUniqueStylesFactory({})

window.chameleon = (el: HTMLElement): StyleGraph | null | undefined => {
  return buildUniqueStylesGraph({ el, getGraph: getUniqueStyles })
}
window.getUniq = getUniqueStyles
window.createIframe = createIframe
window.getDefaultStyles = getDefaultStyles