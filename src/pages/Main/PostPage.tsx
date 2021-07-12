import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDateTime, truncateString } from '../../utils/helperFuncs';
import PostListTable from './PostListTable';

const PostPage = () => {

	return (
		<PostListTable projects={[]} />
	)
}

export default PostPage;