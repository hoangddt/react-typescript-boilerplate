import { makeStyles } from '@material-ui/core/styles';

export const useNavStyles = makeStyles(
	(theme) => ({
		avatar: {
			width: theme.spacing(4.1),
			height: theme.spacing(4.1),
			marginRight: '0.4em',
			color: theme.palette.primary.main,
			backgroundColor: '#d3d3d3',
			[theme.breakpoints.down('xs')]: {
				width: theme.spacing(3.5),
				height: theme.spacing(3.5),
			},
		},
		container: {
			position: 'sticky',
			top: 0,
			zIndex: 100,
		},
		userInfo: {
			display: 'flex',
			alignItems: 'center',
		},
		lastBtn: {
			marginLeft: '1em',
		},
		logoWrapper: {
			marginRight: '1em',
			display: 'flex',
			alignItems: 'center',
		},
		leftPortion: {
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
		},
		logoBtn: {
			textTransform: 'none',
			fontSize: '1.2em',
			padding: '0.1em',
			marginRight: '0.3em',
			[theme.breakpoints.down('xs')]: {
				fontSize: '1em',
				marginLeft: '0.6em',
			},
		},
		svgImage: {
			width: '35px',
			marginRight: '5px',
			[theme.breakpoints.down('xs')]: {
				width: '30px',
			},
		},
		btnsWrapper: {
			display: 'flex',
			alignItems: 'center',
		},
		topLink: {
			'& > * + *': {
				marginLeft: theme.spacing(2),
		    }
		}
	})
);


export const useMainPageStyles = makeStyles(
	(theme) => ({
		headerPaper: {
			padding: '0.8em 1.5em',
		    marginBottom: '1em',
		    display: 'flex',
		    alignItems: 'center',
		},
		headerIcon: {
			fontSize: '4.5em',
      		marginRight: '0.2em',
		}
	})
);


export const useNewsListingStyles = makeStyles(
	(theme) => ({
		root: {
			paddingTop: '1em'
		},
		newsPaper: {
			padding: '0.8em 1.5em',
		    // marginBottom: '1em',
		    display: 'flex',
		    alignItems: 'center',
		    flexDirection: 'column'
		},
		lineOne: {
			'& > * + *': {
				marginLeft: theme.spacing(0.5),
		  },
		  // flexWrap: 'wrap'
		},
		lineTwo: {
			marginLeft: '1em',
			'& > * + *': {
				marginLeft: theme.spacing(0.5),
		    }
		}
	})
);

export const useBodyStyles = makeStyles(
    (theme) => ({
      root: {
        // width: '100vW',
        // display: 'flex',
        // flexDirection: 'column',
        // flex: 1,
        // minHeight: '100vH',
        backgroundColor: '#00968810',
      },
    })
  );
