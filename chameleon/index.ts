import { buildUniqueStylesGraph, getUniqueStylesFactory } from "./util"

type StyleGraph = NonNullable<ReturnType<typeof buildUniqueStylesGraph>>

declare global {
  interface Window {
    chameleon: (el: HTMLElement) => StyleGraph | null | undefined
  }
}

const { getUniqueStyles } = getUniqueStylesFactory({})

window.chameleon = (el: HTMLElement): StyleGraph | null | undefined => {
  return buildUniqueStylesGraph({ el, getGraph: getUniqueStyles })
}
