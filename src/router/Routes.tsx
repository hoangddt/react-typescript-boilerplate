import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';


const Routes = () => {
	return (
			<Router>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
	)
}

export default Routes;
