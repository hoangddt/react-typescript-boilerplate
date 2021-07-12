import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PostPage from '../pages/Main/PostPage';
import { Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const Routes = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Container disableGutters={isMobile}>
			<Router>
				<Switch>
					<Route exact path="/">
						<PostPage />
					</Route>
				</Switch>
			</Router>
		</Container>
	)
}

export default Routes;
