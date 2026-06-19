/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  plugins: [],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'theme-color': '#0078C2',
        'error': '#D64242',
        'dark': '#49556D',
        'light': '#919BA7',
        'placeholder': '#7C8B9D',
        'lighter': '#BFBFBF',
        'hover-bg': '#F5F8FE',
        'success': "#34C240",
        'prof': '#2E3646',
        'prof-overlay': '#2E364670',
        'profLight40': '#2E364666',
        'greenSelection': '#DDFFDA',
        'greenLight': '#F7FFF6',
        'datetime': '#818181',
        'filterType': '#525252',
        'profileModalBorder': '#EAEBF0',
        'meetFilterBlueLight': '#DDE9FF',
        'meetGreenPill': '#D7FFD7',
        'meetGreenBg': '#F0FAF0',
        'meetRedBg': '#FFF7F9',
        'meetRedPill': '#FCDCDC',
        'topSearch': '#B7B7B7',
        'calModalBg': '#FAFAFA',
        'textGray': '#707070',
        'starred': '#FFD600',
        'memberCardHeader': '#272D37',
        'gray50': '#5F6D7E',
        'graySecondary': '#8D8D8D',
        'action': '#EEA23E',
        'actionBg': '#FFF8EB',
        'purpleButton': '#3E45EE',
        'searchReport': '#EDF3FF',
        'searchReportText': '#3A3A3A',
        'themeLightBlue': '#EAF2FF',
        'newsHover': '#E4EDFF',
        'memberCount': '#7D7D7D',
        'mapDistance': '#BAC0C8',
        'compareHead': '#444',
        'pdfActive': '#E3EFF7'


      },
      backgroundImage: {
      },
      backgroundColor: {
        'modal-overlay': '#00000099',
        'modal': 'rgb(42 55 61)',
        'checkedLightBg': '#E9FFF7',
        'lightBlueBg': '#F2F5FF',
        'actionableOrange': '#F4893C',
        'actionableYellow': '#E5C315',
        'actionableLightOrange': '#FFF5EA',
        'actionableLightGreen': '#ECFFF0',
        'actionableLightPurple': '#FDEAFF',
        'actionableLightYellow': '#FDFFEA',
        'chatInput': '#F8F9FB',
        'tableLightBlue': '#F2FAFF',
        'tableHeadText': '#444',
        'overlay': 'rgba(0, 0, 0, 0.35)'


      },
      borderColor: {
        'light': '#2E36461A',
        'checkbox': "#C4C4C4",
        'accordion': '#B6C2E2'


      },
      textColor: {
        'light_black': 'rgba(22, 22, 22, 0.6)'
      },
      fontSize: {
        headingxl: '2.625rem',
        heading: '2rem',
        paragraph: '1rem',
        small: '0.625rem',
        smallCaption: '0.75rem',
        smallSubheading: '0.875rem',
        medium: '1.0625rem',
        mediumCaption: '1.125rem',
        mediumSubheading: '1.25rem',
        mediumHeading: '1.375rem',
        large: '1.5rem',
        largeX: '1.625rem',
        extraLarge: '1.75rem',
      },
      borderWidth: {
        '1': '0.5px'
      },
      width: {

      },
      height: {
        screen: '100dvh'
      },
      lineHeight: {

      },
      fontFamily: {
        'sfpro': 'sfpro'
      },
      borderColor: {
        borderInput: "#DAE0E6"
      },
      boxShadow: {
        'filter': '2px 4px 4px 0px rgba(152, 152, 152, 0.25)',
        'meetModal': '2px 2px 2px 0px rgba(152, 152, 152, 0.16)',
        'textarea': '2px 2px 2px 0px rgba(152, 152, 152, 0.18)',
        'attendance': '0px 0px 24px 0px rgba(0, 0, 0, 0.25);'

      },
      borderRadius: {
        'sm': '4px'
      },
      dropShadow: {
      },
      gridTemplateColumns: {

      },
      
    },
    screens: {
      mobile: '279px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      tab: '821px',
      lg: '1024px',
      desk: '1280px',
      mac: '1440px',
      xl: '1600px',
      deskhd: '1920px',
      twok: '2200px',
      threek: '3199px'
    }
  },
})
