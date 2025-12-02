import theme from '../../op1000theme'

export const style = {
	container: (index) => {
		return {
			display: 'flex',
			flexDirection: 'column',
			height: { xs: 'auto', md: `${index % 3 === 0 ? '320px' : '350px'}` },
			backgroundColor: theme.palette.sand[500],
			boxShadow: '2px 2px 50px -10px rgba(0, 0, 0, 0.08)',
			borderRadius: theme.spacing(1),
			px: theme.spacing(3),
			py: theme.spacing(4),
			gap: theme.spacing(3),
		}
	},
	iconContainer: (index) => {
		return {
			width: theme.spacing(9),
			height: theme.spacing(9),
			backgroundColor: circleColor[index],
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}
	},
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: theme.spacing(1.25),
	},
	content: {
		color: theme.palette.text.bodyDark,
	},
}

const circleColor = {
	0: '#CCB57E',
	1: '#BCB1D0',
	2: '#BABD7D',
	3: '#CDABC4',
}
