import NavBar from '../../components/NavBar';
import StoriesListing from '../../components/StoriesListing';
import { useBodyStyles } from '../../styles/materialui-custom/multiStyle';

const PostPage = () => {

	const classes = useBodyStyles();

	return (
		<div className={classes.root}>
			<NavBar isChild={false}></NavBar>
			<StoriesListing></StoriesListing>
		</div>
	)
}

export default PostPage;
