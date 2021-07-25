import {
	AppBar,
	Toolbar,
	Typography,
	Link,
	Button,
	useMediaQuery,
	Container,
	Avatar
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HackerNewIcon from '../img/hacker-news.svg';
import { useNavStyles } from '../styles/materialui-custom/multiStyle';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
	isChild: boolean;
}


const NavRightButton = () => {
	const classes = useNavStyles();

	return (
		<div className={classes.btnsWrapper}>
			<div className={classes.userInfo}>
				<Avatar className={classes.avatar}>HT</Avatar>
				<Typography color="secondary" variant="body1">
					hoangddt
				</Typography>
			</div>
			<Button color="secondary" variant="outlined" size="small" className={classes.lastBtn}>
				Log out
			</Button>
		</div>
	)
};


const NavBar = ({isChild = false}: NavBarProps) => {
	const classes = useNavStyles();
	const handleGoBack = () => {
		console.log("Go back pressed!");
	}
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const mainButton = () => {
		if (!isChild) {
			return (
				<div className={classes.logoWrapper}>
					<Button color="secondary" className={classes.logoBtn}>
						<img src={HackerNewIcon} alt="logo" className={classes.svgImage} />
						Hacker News
					</Button>
					<Typography className={classes.topLink}>
						<Link href="#" color="inherit" rel="noopener">{t('navbar.new')}</Link>
						<Link href="#" color="inherit" rel="noopener">{t('navbar.threads')}</Link>
						<Link href="#" color="inherit" rel="noopener">past</Link>
						<Link href="#" color="inherit" rel="noopener">{t('navbar.comment')}</Link>
						<Link href="#" color="inherit" rel="noopener">{t('navbar.ask')}</Link>
						<Link href="#" color="inherit" rel="noopener">show</Link>
						<Link href="#" color="inherit" rel="noopener">job</Link>
						<Link href="#" color="inherit" rel="noopener">submit</Link>
					</Typography>
				</div>
			)
		} else {
			return (
				<Button
				  startIcon={<ArrowBackIcon />}
				  color="secondary"
				  onClick={handleGoBack}
				  className="backBtn"
				>
				  Home
				</Button>
			)
		}
	}

	return (
		<Container className={classes.container}>
			<AppBar elevation={1} color="inherit" position="static">
				<Toolbar>
					<div className={classes.leftPortion}>{mainButton()}</div>
					<NavRightButton />
				</Toolbar>
			</AppBar>
		</Container>
	)
};


export default NavBar;
