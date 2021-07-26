import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import OrderInformation from '../pages/Main/OrderInformation';

const Routes = () => {
	return (
			<Router>
				<Switch>
					<Route exact path="/">
						<OrderInformation />
					</Route>
				</Switch>
			</Router>
	)
}

export default Routes;
