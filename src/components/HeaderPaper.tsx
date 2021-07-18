import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useMainPageStyles } from '../styles/materialui-custom/multiStyle';


const HeaderPaper = () => {
	const classes = useMainPageStyles();

	return (
		<Paper className={classes.headerPaper}>
			<AssignmentIcon
				fontSize="large"
				color="primary"
				className={classes.headerIcon}
			/>
			<div>
				<Typography color="secondary">
					All Projects
				</Typography>
				<Typography
					color="secondary"
				>
					List of all the created or joined projects.
				</Typography>
			</div>
		</Paper>
	)
};


export default HeaderPaper;
