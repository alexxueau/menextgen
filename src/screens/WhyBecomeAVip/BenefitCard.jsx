import React from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import theme from '../../op1000theme'
import { style } from './BenefitCard.style'

const BeenfitCard = ({ index, title, content, icon }) => {
	return (
		<Box sx={style.container(index)}>
			   <Box
        component="img"
        src={icon}
        alt={title || "icon"}
        sx={{
          width: 72,
          height: 72,
          ...style.iconContainer(index),
        }}
      />
			<Box sx={style.contentContainer}>
				<Typography sx={{color: theme.palette.text.headerDark}}variant="h4">{title}</Typography>
				<Typography sx={style.content} variant="body1">
					{content}
				</Typography>
			</Box>
		</Box>
	)
}

BeenfitCard.propTypes = {
	index: PropTypes.number,
	title: PropTypes.string,
	content: PropTypes.string,
	icon: PropTypes.node,
}

export default BeenfitCard
