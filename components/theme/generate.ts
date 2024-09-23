import { randomPick, shuffle } from "../utils";
import { ResponsiveMixin, Theme } from "./types";
import { shadows } from "./variants";

const fontFamilies = [
  'helveticaneue',
  'Noto Sans, sans-serif',
]

const spacing = {
  containerWidth: ['96%', '94%', '92%'] as ResponsiveMixin<string>,
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

export const generateTheme = (): Theme => {
  const palette = colorPalettes[randomPick(0, colorPalettes.length - 1)]
  const [primaryff, secondaryff] = shuffle(fontFamilies)
  const typography = {
    primaryff,
    secondaryff,
  }
  return {
    typography,
    palette,
    spacing,
    components: {
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
      icon: {
        fontSize: '22px',
        color: palette.button,
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
        color: palette.button,
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
        color: palette.copy,
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
        color: palette.copy,
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
        color: palette.button,
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
        color: palette.button,
      },
      buttonWithIconLayout: {
        gap: '8px'
      },
    }
  }
}