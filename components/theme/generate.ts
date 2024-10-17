import { randomPick, shuffle } from "../utils";
import { CssProps, ResponsiveMixin, Theme } from "./types";
import { colors, shadows } from "./variants";

// NOTE: THE DEFAULT TEMPLATE SHOULD LIVE HERE.  STYLES/INDEX CAN IMPORT FROM HERE
const fsBundles: Partial<Record<keyof Theme['components'], CssProps>>[] = [{
  copy: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  heading: {
    fontSize: '20px',
    lineHeight: '28px'
  },
  h1: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  h2: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  h5: { fontSize: '16px', lineHeight: '24px'},
}, {
  copy: {
    fontSize: '16px',
    lineHeight: '27.2px'
  },
  heading: {
    fontSize: '44px',
    lineHeight: '52.8px',
  }
}, {
  heading: {
    fontSize: '21px',
    lineHeight: '27.3px',
  },
  copy: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  h1: {
    fontSize: '66px',
    lineHeight: '73px'
  },
  h2: {
    fontSize: '28px',
    lineHeight: '36px'
  },
  h3: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  h4: { fontSize: '18px', lineHeight: '24px'},
  h5: { fontSize: '16px', lineHeight: '20px'}
}, {
  h1: {
    fontSize: '142.5px',
    lineHeight: '132px',
  },
  h2: {
    fontSize: '71.25px',
    lineHeight: '66px',
  },
  copy: {
    fontSize: '16px',
    lineHeight: '22.4px'
  },
  link: {
    fontSize: '14px'
  },
  heading: {
    fontSize: '18px',
    lineHeight: '26.1px'
  },
  h3: {
    fontSize: '36px',
    lineHeight: '36px'
  },
  h4: {
    fontSize: '22px',
  },

}, {
  h2: {
    fontSize: '32px',
    lineHeight: '38px'
  },
  h3: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  copy: {
    fontSize: '18px',
    lineHeight: '24px'
  }
}]

const fontFamilies = [
  'helveticaneue',
  'Noto Sans, sans-serif',
]

const spacing = {
  containerWidth: ['96%', '94%', '92%'] as ResponsiveMixin<string>,
  containerMargins: ['2vw', '3vw', '4vw'] as ResponsiveMixin<string>,
  smallGap: '6px',
  gap: '12px',
  biggishGap: '20px',
  bigGap: '40px',
}

const colorPalettes: Theme['palette'][] = [
  // happy hues
  {
  background: '#16161a',
  copy: '#94a1b2',
  heading: '#fffffe',
  button: '#fffffe',
  primary: '#7f5af0',
  secondary: '#72757e',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
// happy hues2
{
  background: '#FFFFFF',
  copy: '#1f1235',
  heading: '#1f1235',
  button: '#1f1235',
  primary: '#ff6e6c',
  secondary: '#67568c',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
// happy hues 3
{
  background: '#55423d',
  copy: '#fffffe',
  heading: '#fffffe',
  button: '#271c19',
  primary: '#ff6e6c',
  secondary: '#e78fb3',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
// happy hues 4
{
  background: '#fffffe',
  copy: '#2d334a',
  heading: '#272343',
  button: '#272343',
  primary: '#ffd803',
  secondary: '#e3f6f5',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
// happy hues 5
{
  background: '#f2f7f5',
  copy: '#475d5b',
  heading: '#00473e',
  button: '#00473e',
  primary: '#faae2b',
  secondary: '#ffa8ba',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
// happy hues 6
{
  background: '#232946',
  copy: '#b8c1ec',
  heading: '#fffffe',
  button: '#232946',
  primary: '#eebbc3',
  secondary: '#fffffe',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
  error: '#dd2c00',
  success: '#2cb67d',
  white: '#fff',
},
{ // youtube.com?
  background: '#fff',
  copy: '#0f0f0f',
  heading: '#212121',
  primary: '#3f51b5',
  button: '#fff',
  secondary: '#c5cae9',
  error: '#dd2c00',
  success: '#303f9f',
  white: '#fff',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)'
}, { // chess.com
  background: 'rgb(49, 46, 43)',
  copy: '#fff',
  heading: '#fff',
  button: '#fff',
  primary: 'rgb(129, 182, 76)',
  secondary: '#302E2B',
  error: 'rgb(224, 40, 40)',
  success: 'rgb(129, 182, 76)',
  white: '#fff',
  grey: 'rgba(255, 255, 255, 0.5)',
  inactive: 'rgba(255, 255, 255, 0.5)'
}, { // reddit.com
  background: 'rgb(14, 17, 19)',
  copy: 'rgb(242, 242, 242)',
  heading: 'rgb(241, 243, 245)',
  button: '#fff',
  primary: 'rgb(217, 57, 0)',
  secondary: 'rgb(17, 91, 202)',
  error: 'rgb(224, 40, 40)',
  success: 'rgb(129, 182, 76)',
  white: '#fff',
  grey: 'rgb(116, 135, 145)',
  inactive: '#FFFFFF26'
}]

export const getComponents = ({
  palette,
  typography,
  components,
}: {
  palette: Theme['palette']
  typography: Theme['typography']
  components: Partial<Theme['components']>
}): Theme['components'] => {
  const template = {
    button: {
      padding: '12px 18px',
      color: palette.button,
      backgroundColor: palette.primary,
      fontSize: '16px',
      cursor: 'pointer',
      fontFamily: typography.primaryff
    },
    heading: {
      margin: '0',
      color: palette.heading,
      fontFamily: typography.primaryff,
    },
    h1: {
      fontSize: '94px',
      lineHeight: '97px',
      fontWeight: 'bold',
      letterSpacing: '-1.46828px',
    },
    h2: {
      fontSize: '56px',
      lineHeight: '64px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '22px',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 'normal',
    },
    select: {
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '9px 6px',
      borderRadius: '0.25rem',
      fontWeight: '400',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      fontFamily: typography.primaryff,
      width: '100%'
    },
    option: {
      padding: '9px 6px',
    },
    input: {
      padding: '9px 12px',
      backgroundColor: palette.background,
      color: palette.copy,
    },
    textArea: {
      padding: '9px 12px',
      borderRadius: '0.25rem',
      border: '2px solid rgba(0, 0, 0, 0.6)',
    },
    link: {
      fontSize: '14px',
      color: palette.primary,
      fontWeight: 'bold',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    copy: {
      fontFamily: typography.secondaryff,
      color: palette.copy,
      fontSize: '16px',
      lineHeight: '24px',
    },
    span: {
      color: palette.copy
    },
    icon: {
      fontSize: '22px',
      color: palette.copy,
    },
    table: {
      borderSpacing: '0',
      border: `1px solid ${palette.copy}`,
      borderBottom: 'none',
    },
    td: {
      borderBottom: `1px solid ${palette.copy}`,
      padding: '12px 32px'
    },
    th: {
      borderBottom: `1px solid ${palette.copy}`,
      padding: '12px 32px',
      minWidth: '120px',
      position: 'relative',
      textAlign: 'center',
      fontFamily: typography.primaryff,
    },
    thInner: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      justifyContent: 'center',
      position: 'relative',
    },
    thSort: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      right: '-16px',
      cursor: 'pointer',
    },
    thSortAsc: {
      position: 'relative',
      top: '4px',
    },
    thSortDesc: {
      position: 'relative',
      top: '-4px',
    },
    accordionSummary: {
      backgroundColor: palette.secondary,
      color: palette.button,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 18px',
      gap: '20px',
      alignItems: 'center',
      fontSize: '30px',
      fontWeight: 'bold',
    },
    accordionContainer: {
      border: `1px solid ${palette.copy}`,
      width: '100%'
    },
    accordionHeading: {
      color: palette.heading,
      fontWeight: 'bold',
    },
    accordionExpanded: {
      padding: '12px 18px',
    },
    textAccordionSummary: {
      gap: '6px',
      fontSize: '14px',
    },
    textAccordionContainer: {
      gap: '8px'
    },
    textAccordionHeading: {
      fontSize: '14px',
      color: palette.primary,
      fontWeight: 'bold'
    },
    textAccordionExpanded: {
      paddingLeft: '22px',
      color: palette.copy
    },
    inputWithIconContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    inputWithIconIcon: {
      color: palette.inactive,
      fontSize: '18px',
      zIndex: '1',
      position: 'absolute',
      left: '18px',
    },
    inputWithIconIconRev: {
      left: 'initial', 
      right: '18px'
    },
    inputWithIconInput: {
      paddingLeft: '40px',
      position: 'relative',
      top: '-1px'
    },
    inputWithIconInputRev: {
      paddingLeft: '18px', // WARNING: COUPLED WITH INPUT PADDING
      paddingRight: '40px',
    },
    label: {
      color: 'inherit',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    autoCompleteContainer: {
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content',
      minWidth: '300px'
    },
    autoCompleteInput: {
      width: '100%',
    },
    autoCompleteOption: {
      padding: '4px 6px',
    },
    autoCompleteOptionSelected: {
      backgroundColor: palette.secondary,
    },
    autoCompleteExpanded: {
      position: 'absolute',
      top: `calc(100% + 5px)`,
      left: '0',
      minWidth: '100%',
      height: 'auto',
      borderRadius: '0.25rem',
      padding: '6px',
      backgroundColor: '#fff',
      boxShadow: shadows.card,
    },
    autoCompleteResultSummary: {
      fontWeight: 'bold'
    },
    checkboxContainer: {
      gap: '12px',
    },
    checkboxInput: {

    },
    checkboxLabel: {

    },
    customCheckboxContainer: {
      gap: '12px'
    },
    customCheckboxInput: {
      border: '1px solid #333',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    customCheckboxLabel: {

    },
    dropdownContainer: {
      position: 'relative',
      display: 'inline-block',
      width: '100%',
    },
    dropdownIcon: {
      fontSize: '12px',
    },
    dropdownPopup: {
      position: 'relative',
      fontSize: '16px',
      padding: '9px 6px',
      borderRadius: '0.25rem',
      fontWeight: '400',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      backgroundColor: '#fff',
    },
    dropdownOptionContainer: {
      position: 'absolute',
      top: 'calc(100% + 5px)',
      left: '0',
      width: '100%',
      height: 'auto',
      borderRadius: '0.25rem',
      padding: '6px',
      backgroundColor: '#fff',
      boxShadow: shadows.lichessCard,
    },
    dropdownOption: {
      padding: '4px 6px'
    },
    dropdownOptionSelected: {
      backgroundColor: palette.secondary,
    },
    dropdownBubbleArrow: {
      position: 'absolute',
      top: '100%',
      width: '0', 
      height: '0', 
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '5px solid #fff',
    },
    toggleButtonContainer: {
      gap: spacing.gap,
      alignItems: 'center'
    },
    toggleButtonButton: {
      border: '2px solid black',
      backgroundColor: 'white',
      color: 'black',
    },
    toggleButtonSelected: {
      backgroundColor: 'black',
      color: 'white',
    },
    modalBackground: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'fixed',
      top: '0',
      left: '0',
      minWidth: '600px',
      minHeight: '600px',
      width: '100vw',
      height: '100vh',
    },
    modalCloseIconContainer: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      cursor: 'pointer',
    },
    modalContainer: {
      margin: 'auto',
      backgroundColor: '#fff',
      width: '45vw',
      minWidth: '500px',
      height: '40vw',
      minHeight: '300px',
    },
    modalMuiContainer: {
      margin: 'auto',
      backgroundColor: '#fff',
      width: '45vw',
      minWidth: '500px',
      height: '40vw',
      minHeight: '300px',
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    iconButtonInner: {
      gap: spacing.smallGap,
      color: palette.copy,
    },
    iconButtonIcon: {
      fontSize: '40px',
      fill: 'currentColor',
      color: 'currentColor',
    },
    iconButtonLabel: {

    },
    iconButtonContainer: {
      minWidth: '50px'
    },
    buttonWithIconButton: {

    },
    buttonWithIconIcon: {
      fontSize: '22px',
    },
    buttonWithIconLayout: {
      gap: '8px'
    },
  }
  return (
    Object.entries(template)
      .reduce((acc, [k,v]) => {
        const diff = components[k as keyof Theme['components']]
        return {
          ...acc,
          [k]: {
            ...v,
            ...diff,
          }
        }
      }, {} as Theme['components'])
  ) as Theme['components']
}

export const getSuperComponents = ({
  palette,
  typography,
}: {
  palette: Theme['palette']
  typography: Theme['typography']
}): Theme['superComponents'] => {
  return {
    navbar: {
      height: '60px',
      backgroundColor: palette.primary,
      position: 'relative'
    },
    navbarInner: {
      margin: 'auto',
      display: 'flex',
      width: spacing.containerWidth,
      justifyContent: 'space-between',
      height: '60px',
      alignItems: 'stretch'
    },
    navbarGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.gap,
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: spacing.gap,
      paddingBottom: spacing.gap,
      height: '100%'
    },
    menuItemGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.biggishGap,
      paddingRight: '12px'
    },
    menuItem: {
      paddingLeft: '0', // need a rtl version of this :(
      gap: spacing.gap,
      cursor: 'pointer'
    },
    menuItemIcon: {
      color: 'inherit'
    },
    menuItemIconContainer: {
      minWidth: '30px',
    },
    menuItemLabel: {
      color: 'inherit',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    collapsibleMenuItem: {
    },
    collapsibleMenuItemExpanded: {
      paddingTop: spacing.gap,
      paddingLeft: spacing.gap,
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap,
    },
    sidebarLeft: {
      minHeight: 'calc(100vh - 60px)',
      paddingLeft: spacing.containerMargins,
      backgroundColor: palette.primary,
      color: palette.button,
    },
    sidebarLeftNoNav: {
      minHeight: '100vh'
    },
    dashboardContainer: {
      minHeight: '100vh',
      width: '100vw',
    },
    dashboardContent: {
      backgroundColor: palette.background,
      padding: spacing.containerMargins,
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'auto'
    },
    dashboardSubNav: {
      width: '100%',
      flexGrow: '1',
      alignItems: 'stretch',
    },
    toastContainer: {
      top: '0',
      left: '0',
      zIndex: '2',
      height: 'fit-content',
      width: '100vw',
      position: 'fixed',
    },
    toast: {
      fontSize: '18px',
      color: palette.button,
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '0.25rem',
      boxShadow: shadows.lichessCard,
      padding: '18px 36px',
      width: 'fit-content',
      margin: 'auto'
    },
    success: {
      backgroundColor: palette.success,
    },
    error: {
      backgroundColor: palette.error,
    },
    info: {
      backgroundColor: palette.background,
      color: palette.copy,
    },
    dashboardTable: {
      gap: spacing.biggishGap
    },
    dashboardTablePagination: {},
    dashboardTableFilters: {
      gap: spacing.biggishGap,
      flexWrap: 'wrap',
      flexDirection: 'column',
      width: '50%'
    },
    dashboardTableFiltersContainer: {
      gap: spacing.biggishGap,
      backgroundColor: palette.grey,
      padding: spacing.bigGap,
      borderRadius: '0.25rem',
    },
    brandLogoContainer: {
    },
    directoryLink: {
      fontSize: '14px',
      color: palette.button,
      fontWeight: 'normal'
    },
    directoryLinksHeader: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: palette.button,
      marginBottom: spacing.smallGap
    },
    directoryLinksContainer: {
      gap: '4px',
      width: 'fit-content'
    },
    footer: {
      color: palette.button,
      backgroundColor: palette.primary,
      paddingTop: spacing.bigGap,
      paddingBottom: spacing.gap,
      paddingRight: spacing.bigGap,
      paddingLeft: spacing.gap,
      fontSize: '14px'
    },
    socialMediaButton: {
      color: palette.button,
      backgroundColor: palette.secondary,
      boxShadow: shadows.card,
      borderRadius: '50%',
      padding: spacing.smallGap,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
      height: '40px'
    },
    socialMediaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.gap
    },
    socialMediaLink: {
    },
    legalese: {
      color: 'currentcolor',
      fontSize: '12px',
      lineHeight: '18px'
    },
    carouselContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      position: 'relative',
      backgroundColor: palette.secondary,
      color: palette.copy
    },
    carouselIconHorizontal: {
      height: '300px',
      width: '60px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    carouselIconVertical: {
      width: '100vw',
      height: '60px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    carouselIcon: {
      color: '#fff',
      fontSize: '40px'
    },
    carouselOverlay: {
      backgroundSize: 'cover'
    },
    landerTwoCol: {
      display: 'flex',
      alignItems: 'stretch',
      gap: spacing.bigGap,
      padding: '40px 0',
    },
    landerTwoColChild: {
      display: 'flex',
      flexDirection: 'column',
      padding: '18px 0'
    },
    landerTwoColLeft: {
      width: '40%'
    },
    landerTwoColRight: {
      flexGrow: '1',
      alignItems: 'center'
    },
    avatar: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap,
    },
    avatarInner: {
      display: 'flex',
      gap: spacing.gap,
      alignItems: 'stretch'
    },
    avatarImg: {
      borderRadius: '50%',
      width: '100%'
    },
    avatarLeft: {
      width: '30%',
      display: 'flex',
      alignItems: 'center'
    },
    avatarRight: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'center',
      gap: spacing.smallGap
    },
    avatarBig: {
      fontWeight: 'bold'
    },
    avatarLittle: {
      fontSize: '14px',
      fontWeight: 'normal'
    },
    landerCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: spacing.biggishGap,
      padding: '40px 0'
    },
    landerCopy: {
      fontSize: '20px',
      width: '50%',
      textAlign: 'center'
    },
    landerHeading: {
      
    },
    landerChild: {

    },
    card: {
      borderRadius: '0.25rem',
      backgroundColor: palette.background,
      color: palette.copy,
      padding: spacing.biggishGap,
      boxShadow: shadows.card
    },
    testimonialContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.biggishGap,
      maxWidth: '360px'
    },
    landerTestimonials: {
      display: 'flex',
      gap: spacing.bigGap,
      padding: '60px 0'
    },
    landerTestimonialsCol: {
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap
    },
    landerTestimonialsTwoCol: {
      width: '70%',
      margin: 'auto'
    },
    authContainer: {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      display: 'flex'
    },
    authOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    },
    authCard: { 
      margin: 'auto', minWidth: '600px',
      backgroundColor: palette.white
    },
    smallInput: {
      width: '80px'
    },
    multiInputRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: spacing.gap,
      flexWrap: 'wrap'
    },
    form: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      gap: spacing.gap
    },
    formButtons: {
      gap: spacing.gap,
      marginTop: spacing.bigGap
    },
    formHeading: {},
    thumbnailImage: {
      width: '100%',
      borderRadius: '0.25em',
      aspectRatio: 'calc(160 / 89.94)'
    },
    thumbnailSm: {
      width: '160px'
    },
    thumbnailMd: {
      width: '382px'
    },
    thumbnailLg: {
      width: '500px'
    },
    videoSearchResult: {
      gap: '1.25em'
    },
    videoSearchVertical: {
      flexDirection: 'column',
    },
    videoSearchResultMd: {
      fontSize: '14px',
      gap: spacing.smallGap
    },
    videoSearchResultSm: {
      fontSize: '12px',
      gap: spacing.smallGap,
      fontWeight: 'bold',
      alignItems: 'center'
    },
    videoSearchInfo: {
      gap: '1.25em'
    },
    searchResultTitle: {
      fontWeight: 'inherit',
      fontSize: '1.3em'
    },
    searchResultMeta: {
      fontSize: '1em'
    },
    searchResultDescription: {},
    searchResultAvatar: {
      width: '2em'
    },
    searchResultAvatarHeading: {
      fontSize: '1.1em'
    },
    searchResultAvatarCopy: {
      fontSize: '1em',
      color: palette.copy
    },
    price: {
      display: 'inline',
      fontSize: '18px'
    },
    priceSymbol: {
      fontSize: '0.7em',
      top: '-0.4em',
      position: 'relative',
      fontWeight: 'bold'
    },
    priceDollars: {
      fontWeight: 'bold'
    },
    priceCents: {
      fontSize: '0.7em',
      top: '-0.3em',
      position: 'relative'
    },
    priceCurrency: {
      fontSize: '0.7em'
    },
    starRating: {
      alignItems: 'center',
      gap: '2px',
      cursor: 'pointer'
    },
    starRatingFilled: {
      color: 'gold'
    },
    starRatingEmpty: {
      color: palette.grey
    },
    product: {
      display: 'flex',
      gap: spacing.gap,
      fontSize: '24px'
    },
    productSm: {
      fontSize: '20px'
    },
    productName: {
      fontSize: '1em',
      lineHeight: '1.1em',
      fontWeight: 'normal'
    },
    productTag: {
      background: palette.grey,
      padding: '8px 12px',
      fontSize: '0.6em',
      fontWeight: 'bold'
    },
    productMeta: {
      fontSize: '0.6em'
    },
    productRating: {
      display: 'flex',
      gap: spacing.smallGap,
      alignItems: 'center'
    },
    productPrice: {
      fontSize: '1.2em'
    },
    amazonSearchSm: {
      flexDirection: 'column',
      width: '382px'
    },
    googleSearchResult: {
      flexDirection: 'column',
      gap: spacing.smallGap,
      width: '600px'
    },
    googleSearchResultHeading: {
      color: 'blue'
    },
    googleSearchResultDescription: {},
    googleSearchResultTags: {
      gap: spacing.gap,
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    googleSearchResultTag: {
      color: palette.copy
    },
    searchPage: {
      flexDirection: 'column',
      gap: spacing.gap
    },
    searchInterlude: {
      paddingTop: spacing.bigGap,
      paddingBottom: spacing.bigGap
    },
    accordionSection: {
      flexDirection: 'column',
      width: '600px'
    },
    accordionSectionIcon: {
      color: palette.copy,
    },
    accordionSectionSummary: {
      backgroundColor: palette.background,
    },
    accordionSectionRoot: {
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none'
    },
    accordionChild: {
      fontSize: '18px'
    },
    cookieSection: {
      position: 'fixed',
      width: '100vw',
      backgroundColor: palette.primary,
      bottom: '0',
      zIndex: '5'
    },
    cookieInner: {
      padding: spacing.bigGap,
      display: 'flex',
      gap: spacing.bigGap,
      justifyContent: 'center',
    },
    cookieCopy: {
      color: palette.button,
      maxWidth: '600px'
    },
    cookieOptions: {
      display: 'flex',
      gap: spacing.gap,
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    cookieOption: {
      border: '1px solid white',
      borderRadius: '0.25rem'
    },
    cookieReject: {},
    shortsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap,
      width: '203px'
    },
    shortsImg: {
      width: '203px',
      height: 'auto'
    },
    shortsTitle: {},
    shortsMeta: {
      fontSize: '14px'
    },
    wikiHeading: {
      fontWeight: 'normal',
      fontSize: '24px'
    },
    wikiHeadingLg: {
      fontSize: '30px'
    },
    wikiHeadingContainer: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
      display: 'flex',
      gap: spacing.bigGap,
      alignItems: 'center'
    },
    wikiSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap
    },
    wikiCopy: {

    },
    tableOfContents: {
      width: '240px',
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.smallGap
    },
    tableOfContentsLink: {
      paddingLeft: '22px',
      fontWeight: 'normal'
    },
    newsPreviewH: {
      display: 'flex',
      gap: '8px',
      margin: 'auto'
    },
    newsPreview: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    newsPreviewHHeading: {
      fontSize: '16px',
      fontWeight: 'normal',
    },
    newsPreviewHImg: {
      width: '40%'
    },
    newsPreviewLink: {},
    newsPreviewTopHeading: {
      fontSize: '36px',
      lineHeight: '38px',
      textAlign: 'center',
    },
    newsPreviewImg: {
      width: '100%',
      margin: 'auto'
    },
    newsPreviewHeading: {
      fontSize: '20px',
      lineHeight: '26px',
      width: '100%',
      margin: 'auto',
    },
    newsPreviewHeadingSm: {
      fontSize: '16px',
      fontWeight: 'normal'
    },
    newsLink: {
      fontSize: '18px',
      color: palette.copy
    },
    newsLinkContainer: {
      padding: '20px 0',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #e6e4e4',
      borderTop: `1px solid #eee`
    },
    newsLinkList: {
      width: '100%',
      margin: 'auto'
    },  
    newsLinkDot: {
      display: 'list-item',
      marginLeft: '12px'
    },
    newsStoryHeading: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap
    },
    newsStoryHeadingTitle: {
      fontSize: '48px',
      lineHeight: '54px'
    },
    newsStoryHeadlineAvatar: {
      width: '60px'
    },
    newsStoryHeadlineAvatarLine1: {
      fontWeight: 'normal',
      fontSize: '18px',
    },
    newsStoryContainer: {
      gap: spacing.biggishGap,
      maxWidth: '900px',
    },
    newsStoryParagraph: {
      padding: `0px 60px`
    },
    newsStoryMedia: {
      height: 'auto',
      width: '100%'
    },
    newsStoryMediaContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: spacing.gap
    },
    newsStoryMediaCaption: {
      fontSize: '14px',
      color: `rgba(0,0,0,0.5)`
    },
    taggedText: {
      color: palette.button,
      backgroundColor: palette.success,
      padding: '6px 12px'
    },
    dashboardCardCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap,
    },
    twoColList: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap,
    },
    twoColListEntry: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    twoColListLeft: {},
    twoColListRight: {},
    dashboardCard: {
      position: 'relative'
    },
    dashboardCardCopy: {
      maxWidth: '80%'
    },
    dashboardCardHeading: {
      marginBottom: spacing.gap,
      fontSize: '18px'
    },
    dashboardCardX: {
      position: 'absolute',
      right: '4px',
      top: '4px'
    },
    dashboardListRow: {
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: shadows.lichessCard,
      padding: `6px ${spacing.biggishGap}`,
      backgroundColor: palette.secondary,
      gap: spacing.gap
    },
    dashboardListRowLeft: {},
    dashboardListRowRight: {},
    dashboardList: {
      flexDirection: 'column',
      gap: spacing.gap
    },
    dashboardListAvatar: {
      width: 'auto'
    },
    dashboardListAvatarCopy: {},
    dashboardListAvatarHeading: {
      fontSize: '18px'
    },
    dashboardListAvatarInner: {
      gap: spacing.biggishGap
    },
    dashboardListRight: {
      gap: spacing.gap,
      alignItems: 'center'
    },
    dashboardListRightIcon: {},
    dashboardHeading: {
      fontSize: '24px'
    },
    dashboardSectionHeader: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    dashboardSearch: {
      flexGrow: '1',
      gap: spacing.gap,
      maxWidth: '600px'
    },
    dashboardSearchHeader: {
      gap: spacing.gap
    },
    dashboardSearchFilter: {},
    dashboardSearchFilterIcon: {
      color: palette.button
    },
    dashboardSearchToggle: {
      padding: '6px 12px',
      borderRadius: '30px',
      fontSize: '12px',
      border: `1px solid rgba(0, 0, 0, 0.5)`,
      height: 'auto'
    },
    dashboardSearchLeft: {
      flexGrow: '1',
      gap: spacing.gap
    },
    stripeTableContainer: {
      flexDirection: 'column',
      gap: spacing.gap,
    },
    stripeTable: {
      border: 'none'
    },
    stripeTableCell: {
      padding: '6px 24px',
      fontSize: '14px',
      borderBottom: `1px solid ${palette.grey}`
    },
    stripeTableHeader: {
      padding: '6px 24px',
      fontSize: '14px',
      textAlign: 'initial',
      borderBottom: `1px solid ${palette.grey}`
    },
    stripeTableCellInner: {
      textAlign: 'initial',
    },
    stripeTableHeaderInner: {
      display: 'block'
    },
    stripeTableBtn: {
      padding: '6px 18px',
      borderRadius: '24px',
      backgroundColor: 'transparent',
      color: palette.primary,
      border: `1px solid ${palette.primary}`,
      fontSize: '14px',
      fontWeight: 'bold'
    },
    stripeTableBottomPagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    stripeTableBottomPaginationBtn: {
      padding: '6px 18px',
      borderRadius: '12px'
    },
    stripeTableTopFilters: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: spacing.gap,
      borderBottom: `1px solid rgba(0,0,0,0.5)`
    },
    stripeTableTopFilterBtn: {
      padding: '6px 12px',
      fontSize: '12px',
    },
    stripeTableTopFilterToggleBtn: {
      padding: '6px 18px',
      borderRadius: '12px'
    },
    stripeTableTopToggleBtn: {
      padding: '6px 12px',
      fontSize: '12px',
      border: `1px solid rgba(0,0,0,0.5)`
    },
    stripeTableTopRight: {
      gap: spacing.gap
    },
    dashboardTabs: {
      backgroundColor: palette.background
    },
    dashboardTab: {
      boxShadow: 'initial'
    },
    dashboardTabInner: {
      gap: spacing.biggishGap
    },
    amazonTopNav: {
      backgroundColor: colors.amazonDark
    },
    amazonTopNavInner: {
      alignItems: 'center'
    },
    amazonMidNav: {
      backgroundColor: 'rgb(35, 47, 62)',
      height: '40px'
    },
    amazonMidNavInner: {
      height: '40px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: spacing.gap,
      color: '#eee'
    },
    amazonBottomNav: {
      backgroundColor: palette.white,
      color: 'rgba(0, 0, 0, 0.5)',
      height: '35px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
    },
    amazonBottomNavInner: {
      height: '35px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: spacing.gap,
      color: 'rgba(0,0,0,0.8)',
      fontSize: '12px',
    },
    lineItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px'
    },
    lineItemLeft: {},
    lineItemRight: {},
    lineItems: {},
    proceedCard: {
      width: '100%',
      background: palette.white,
      color: colors.amazonDark,
      boxShadow: shadows.lichessCard,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.gap
    },
    proceedCardLineItem: {
      fontSize: '18px'
    },
    proceedCardPrice: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    proceedCardButton: {
      borderRadius: '30px',
      padding: '8px 18px'
    },
    proceedCardCheckboxLabel: {},
    cartHeader: {
      padding: `${spacing.smallGap} 0`,
      borderBottom: `1px solid rgba(0,0,0,0.5)`
    },
    cartFooter: {
      paddingTop: spacing.smallGap,
      borderTop: `1px solid rgba(0,0,0,0.5)`,

    },
    cartFooterCopy: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    cartFooterLineItem: {
      width: '20%'
    },
    cartSummary: {
      background: palette.white,
      color: colors.amazonDark,
      padding: '20px'
    },
    cartRow: {
      gap: spacing.gap
    },
    cartRowCheckbox: {
      alignSelf: 'center',
      paddingRight: spacing.bigGap
    },
    cartProduct: {
      gap: spacing.bigGap,
      flexGrow: '1',
      padding: `${spacing.gap} 0`
    },
    cartProductImg: {

    },
    cartProducts: {
      paddingTop: spacing.gap,
      gap: spacing.gap
    },
    cartRowPrice: {
      minWidth: '20%',
      fontSize: '24px',
      textAlign: 'right'
    },
    stupidPromotion: {},
    stupidPromotionButton: {},
    stupidPromotionCopy: {},
    stupidPromotionImage: {},
    stupidPromotionLink: {},
    stupidPromotionRight: {},
    purchaseDelivery: {},
    purchaseDeliveryExtras: {
      paddingLeft: '25px'
    },
    purchaseDeliveryOptions: {},
    purchaseProduct: {
      gap: spacing.gap,
      padding: spacing.biggishGap,
      background: '#eee',
      borderRadius: '12px'
    },
    purchaseProductInfo: {
      padding: '12px 0',
      gap: spacing.gap,
      width: '100%'
    },
    purchaseProductImg: {
      width: '120px'
    },
    purchaseInfoCard: {
      background: palette.white,
      color: colors.amazonDark,
      padding: spacing.biggishGap,
      position: 'relative',
      borderRadius: '8px'
    },
    purchaseInfoContainer: {},
    purchaseInfoCopy: {
      fontSize: '14px',
    },
    purchaseInfoEdit: {
      position: 'absolute',
      top: spacing.gap,
      right: spacing.gap
    },
    purchaseInfoHeading: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    purchaseInfoLink: {},
    orderConfirmH: {
      width: '100%',
      background: palette.white,
      color: colors.amazonDark,
      padding: spacing.biggishGap,
      gap: spacing.biggishGap,
      borderRadius: '8px'
    },
    orderConfirmHButton: {
      borderRadius: '30px',

    },
    orderConfirmHHeading: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    orderConfirmHLegalese: {
      fontSize: '12px'
    },
    orderConfirmV: {
      flexDirection: 'column',
      width: '100%',
      background: palette.white,
      color: colors.amazonDark,
      padding: spacing.biggishGap,
      gap: spacing.biggishGap,
      borderRadius: '8px',
      alignItems: 'center'
    },
    orderConfirmVButton: {
      borderRadius: '80px'
    },
    orderConfirmVLegalese: {},
    orderConfirmVTop: {
      borderBottom: `1px solid rgba(0,0,0,0.5)`,
      paddingBottom: spacing.biggishGap,
      width: '94%'
    },
    orderConfirmVBottom: {
      width: '94%'
    },
    legaleseCard: {
      width: '100%',
      background: palette.white,
      color: colors.amazonDark,
      padding: spacing.biggishGap,
      gap: spacing.biggishGap,
      borderRadius: '8px',
      alignItems: 'center'
    },
    checkoutNav: {
      color: palette.button
    },
    checkoutNavHeading: {
      color: palette.button,
      fontSize: '24px'
    },
    checkoutNavHeadingIcon: {},
    checkoutNavHeadingLink: {},
    checkoutNavInner: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    checkoutNavIcon: {
      color: palette.button
    },
    checkoutPage: {
      minHeight: '100vh',
      backgroundColor: '#eee'
    },
    checkoutPageInner: {
      display: 'flex',
      gap: spacing.biggishGap
    },
    checkoutPageContainer: {
      padding: `${spacing.bigGap} 0`
    },
    checkoutPageLeft: {
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.biggishGap
    },
    checkoutPageRight: {
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.biggishGap
    },
    backToTop: {},
    backToTopLabel: {},
    confirmationPage: {
      backgroundColor: '#eee'
    },
    outlinedLangDropdown: {},
    confirmationPageContainer: {
      padding: `${spacing.bigGap} 0`
    },
    confirmationPageInner: {
      display: 'flex',
      gap: spacing.biggishGap
    },
    confirmationPageLeft: {
      flexGrow: '1'
    },
    confirmationPageRight: {
      minWidth: '300px'
    },
    confirmationPageTop: {
      justifyContent: 'center',
      padding: `${spacing.biggishGap} 0`
    },
    finalItemLeft: {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    finalItemRight: {
      fontSize: '18px',
      fontWeight: 'bold'
    }
  }
}

export const generateTheme = (): Theme => {
  const palette = colorPalettes[randomPick(0, colorPalettes.length - 1)]
  const [primaryff, secondaryff] = shuffle(fontFamilies)
  const fontSizes = fsBundles[randomPick(0, fsBundles.length - 1)]
  
  const typography = {
    primaryff,
    secondaryff,
  }
  return {
    superComponents: getSuperComponents({ palette, typography }),
    typography,
    palette,
    spacing,
    components: getComponents({ 
      palette,
      typography,
      components: {
        ...fontSizes
      }
    })
  }
}