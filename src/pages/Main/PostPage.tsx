import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDateTime, truncateString } from '../../utils/helperFuncs';
import PostListTable from './PostListTable';
import NavBar from '../../stories/NavBar';
import NewsListing from '../../stories/NewsListing';
import { useBodyStyles } from '../../styles/materialui-custom/multiStyle';

const PostPage = () => {

	const classes = useBodyStyles();

	return (
		<div className={classes.root}>
			<NavBar isChild={false}></NavBar>
			<NewsListing></NewsListing>
		</div>
	)
}

export default PostPage;