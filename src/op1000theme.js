import { createTheme } from '@mui/material/styles'

const { breakpoints } = createTheme()

//Font families
const fonts = {
	heading: "'Gentium Book Basic', serif",
	body: "'IBM Plex Sans', sans-serif",
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#7C58BC', // main
			100: '#DFCCFF', // lightest
			200: '#C4ABEE',
			300: '#AB8DDE',
			400: '#9371CD',
			500: '#7C58BC',
			600: '#613AA4',
			700: '#482387',
			800: '#331469',
			900: '#381D69', // darkest
		},
		secondary: {
			main: '#E2C2FF',
			black: '#2e2e2e',
			white: '#FFF9F0',
			purple: '#291e31',
			sand: '#E3D4AFCC',
      		darkSand: '#D0C097',
		},
		sand: {
			100: '#FFF6E0',
			200: '#FBF3DD',
			300: '#F7EFDA',
			400: '#F4EBD6',
			500: '#EFE7D3',
			600: '#C2B698',
			700: '#A99972',
			800: '#81641C',
			900: '#5C4200',
		},
		neutral: {
			white: '#FFFFFF',
			100: '#EDEDED',
			200: '#DADADA',
			300: '#C8C8C8',
			400: '#B6B6B6',
			500: '#A4A4A4',
			600: '#828083',
			700: '#605E62',
			800: '#2F2D31',
			900: '#211E1E',
		},
		text: {
			bodyDark: '#625E5E',
			bodyLight: '#DFDEDE',
			headerDark: '#3A3636',
			headerLight: '#FFFFFF',
		},
	},
	typography: {
		//typography variants
		display: {
			fontFamily: fonts.heading,
			fontStyle: 'italic',
			fontSize: '130px',
			lineHeight: 'auto',
			letterSpacing: '-5px',
			fontWeight: 400,
			[breakpoints.down('md')]: {
				fontSize: '60px', //mobile
			},
		},
		h1: {
			fontFamily: fonts.heading,
			fontSize: '80px',
			lineHeight: 'auto',
			letterSpacing: '-5%',
			fontWeight: 400,
			[breakpoints.down('sm')]: {
				fontSize: '50px',
			},
		},
		h2: {
			fontFamily: fonts.heading,
			fontSize: '60px',
			lineHeight: 'auto',
			letterSpacing: '-5%',
			fontWeight: 400,
			[breakpoints.down('sm')]: {
				fontSize: '40px',
			},
		},
		h3: {
			fontFamily: fonts.heading,
			fontSize: '40px',
			lineHeight: 'auto',
			letterSpacing: '-5%',
			fontWeight: 400,
			[breakpoints.down('md')]: {
				fontSize: '28px',
			},
		},
		h4: {
			fontFamily: fonts.heading,
			fontSize: '28px',
			lineHeight: 'auto',
			letterSpacing: '-5%',
			fontWeight: 400,
			[breakpoints.down('md')]: {
				fontSize: '20px',
				letterSpacing: '0%',
			},
		},
		subtitle1: {
			fontFamily: fonts.body,
			fontSize: '20px',
			lineHeight: 'auto',
			letterSpacing: '0%',
			fontWeight: 400,
			[breakpoints.down('sm')]: {
				fontSize: '18px',
			},
		},
		subtitle2: {
			fontFamily: fonts.body,
			fontSize: '18px',
			lineHeight: 'auto',
			letterSpacing: '0%',
			fontWeight: 500,
			textTransform: 'uppercase',
			[breakpoints.down(breakpoints.values.lg)]: {
				fontSize: '16px',
			},
		},
		body1: {
			fontFamily: fonts.body,
			fontSize: '18px',
			lineHeight: '140%',
			letterSpacing: '0',
			fontWeight: 100,
		},
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 8,
	shadows: [
		'none',
		'2px 2px 50px 1px rgba(255, 255, 255, 0.15)',
		'2px 2px 50px 1px rgba(0, 0, 0, 0.15)',
	],
})

export default theme
