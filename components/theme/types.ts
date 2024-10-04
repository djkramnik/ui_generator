import { CSSProperties } from "react"

export type BreakpointsType = {
  phonesm: null // this is pointless? based on current impl.  It just means a style with no minimum viewport width to apply
  phonelg: string
  tabletsm: string
  tabletlg: string
  desktoplg: string
}

// [<= phonelg, > phonelg, > tabletlg?]
export type MixinList<T extends string = string>
  = [T, T, T?]
// [<= phonelg, > phonelg, > tabletsm, > tabletlg, > desktoplg?]
export type FineGrainedMixinList<T extends string = string>
  = [T, T, T, T, T?]

// ways of specifiying a single responsive style on a component
export type ResponsiveMixin<T extends string = string> =
  | T // applies at all breakpoints
  | MixinList<T>
  | FineGrainedMixinList<T>
  | Partial<Record<keyof BreakpointsType, string>> 

export type ResponsiveMixinProps<T extends CSSProperties> = {
  [key in keyof T]?: ResponsiveMixin
}

export type CssProps = ResponsiveMixinProps<CSSProperties>

export type ThemeConfig = {
  palette: {
    background: ResponsiveMixin
    copy: ResponsiveMixin
    heading: ResponsiveMixin
    primary: ResponsiveMixin
    button: ResponsiveMixin
    secondary: ResponsiveMixin
    error: ResponsiveMixin
    success: ResponsiveMixin
    white: ResponsiveMixin
    grey: ResponsiveMixin
    inactive: ResponsiveMixin
  }
  typography: {
    primaryff: ResponsiveMixin
    secondaryff: ResponsiveMixin
  }
  spacing: {
    containerWidth: ResponsiveMixin
    containerMargins: ResponsiveMixin
    smallGap: ResponsiveMixin,
    gap: ResponsiveMixin,
    biggishGap: ResponsiveMixin,
    bigGap: ResponsiveMixin,
  }
  components: {
    link: CssProps
    button: CssProps
    select: CssProps
    option: CssProps
    input: CssProps
    textArea: CssProps
    heading: CssProps
    h1: CssProps
    h2: CssProps
    h3: CssProps
    h4: CssProps
    h5: CssProps
    copy: CssProps
    icon: CssProps
    table: CssProps
    td: CssProps
    th: CssProps
    thInner: CssProps
    thSort: CssProps
    thSortAsc: CssProps
    thSortDesc: CssProps
    accordionSummary: CssProps
    accordionContainer: CssProps
    accordionHeading: CssProps
    accordionExpanded: CssProps
    textAccordionSummary: CssProps
    textAccordionContainer: CssProps
    textAccordionExpanded: CssProps
    textAccordionHeading: CssProps
    inputWithIconContainer: CssProps
    inputWithIconIcon: CssProps
    inputWithIconInput: CssProps
    inputWithIconIconRev: CssProps
    inputWithIconInputRev: CssProps
    label: CssProps
    autoCompleteExpanded: CssProps
    autoCompleteContainer: CssProps
    autoCompleteInput: CssProps
    autoCompleteOption: CssProps
    autoCompleteOptionSelected: CssProps
    autoCompleteResultSummary: CssProps
    checkboxContainer: CssProps
    checkboxInput: CssProps
    checkboxLabel: CssProps
    customCheckboxContainer: CssProps
    customCheckboxInput: CssProps
    customCheckboxLabel: CssProps
    dropdownContainer: CssProps
    dropdownIcon: CssProps
    dropdownPopup: CssProps
    dropdownOptionContainer: CssProps
    dropdownOption: CssProps
    dropdownOptionSelected: CssProps
    dropdownBubbleArrow: CssProps
    toggleButtonContainer: CssProps
    toggleButtonButton: CssProps
    toggleButtonSelected: CssProps
    modalBackground: CssProps
    modalCloseIconContainer: CssProps
    modalContainer: CssProps
    modalMuiContainer: CssProps
    iconButtonContainer: CssProps
    iconButtonInner: CssProps
    iconButtonIcon: CssProps
    iconButtonLabel: CssProps
    buttonWithIconButton: CssProps
    buttonWithIconIcon: CssProps
    buttonWithIconLayout: CssProps
  }
  superComponents: {
    navbar: CssProps
    navbarInner: CssProps
    navbarGroup: CssProps
    menu: CssProps
    menuItemGroup: CssProps
    menuItem: CssProps
    menuItemLabel: CssProps
    menuItemIcon: CssProps
    menuItemIconContainer: CssProps
    collapsibleMenuItem: CssProps
    collapsibleMenuItemExpanded: CssProps
    sidebarLeft: CssProps
    dashboardContainer: CssProps
    dashboardSubNav: CssProps
    dashboardContent: CssProps
    toastContainer: CssProps
    toast: CssProps
    success: CssProps
    error: CssProps
    info: CssProps
    dashboardTable: CssProps
    dashboardTablePagination: CssProps
    dashboardTableFilters: CssProps
    dashboardTableFiltersContainer: CssProps
    brandLogoContainer: CssProps
    directoryLink: CssProps
    directoryLinksHeader: CssProps
    directoryLinksContainer: CssProps
    footer: CssProps
    socialMediaButton: CssProps
    socialMediaRow: CssProps
    socialMediaLink: CssProps
    legalese: CssProps
    carouselContainer: CssProps
    carouselIconHorizontal: CssProps
    carouselIconVertical: CssProps
    carouselIcon: CssProps
    carouselOverlay: CssProps
    landerTwoCol: CssProps
    landerTwoColChild: CssProps
    landerTwoColLeft: CssProps
    landerTwoColRight: CssProps
    avatar: CssProps
    avatarInner: CssProps
    avatarImg: CssProps
    avatarLeft: CssProps
    avatarRight: CssProps
    avatarBig: CssProps
    avatarLittle: CssProps
    landerCenter: CssProps
    landerCopy: CssProps
    landerHeading: CssProps
    landerChild: CssProps
    card: CssProps
    testimonialContainer: CssProps
    landerTestimonials: CssProps
    landerTestimonialsCol: CssProps
    landerTestimonialsTwoCol: CssProps
    authContainer: CssProps
    authOverlay: CssProps
    authCard: CssProps
    smallInput: CssProps
    multiInputRow: CssProps
    form: CssProps
    formButtons: CssProps
    formHeading: CssProps
    thumbnailImage: CssProps
    thumbnailSm: CssProps
    thumbnailMd: CssProps
    thumbnailLg: CssProps
  }
}

export type Theme = ThemeConfig

export type ResponsiveComponent<
E extends React.ElementType<any>> =
  & React.ComponentPropsWithoutRef<E>
  & {
    $sx?: CssProps
    $variant?: string | string[]
  }

export type WithTheme<T> = T & { theme: Theme }