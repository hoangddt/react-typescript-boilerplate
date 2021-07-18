import { 
	Paper,
	Link,
	Typography,
	useMediaQuery,
	Container,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useNewsListingStyles } from '../styles/materialui-custom/multiStyle';
import LoadingSpinner from './LoadingSpinner';
import InfoText from './InfoText';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TimeAgo from 'react-timeago';

interface StoriesListingProps {
	fetchStatus?: 'loading' | 'failed' | 'succeeded' | 'idle';
	fetchError?: string;
}

const StoriesListing = ({
	fetchStatus = 'loading',
	fetchError = "There are problems with the internet connection",
	...props
}: StoriesListingProps) => {
	const stories = useSelector((state: RootState) => state.stories.stories);
	fetchStatus = useSelector((state: RootState) => state.stories.fetchStatus);
	console.log("/stories/: ", stories)
	const classes = useNewsListingStyles();
	if (fetchStatus === 'loading') {
		return (
			<LoadingSpinner
				marginTop='9em'
				size={80}>
			</LoadingSpinner>
		)
	}

	if (fetchStatus === 'failed') {
		return (
			<InfoText
	        	text={`Error: ${fetchError}`}
	        	variant='h5'
	        />
		)
	}

	const getDomain = (url: string) => {
		try {
			const _url = new URL(url);
			return _url.hostname;
		} catch {
			console.log('/url Error/', url);
			return null;
		}
	}

	if (fetchStatus === 'succeeded') {
		return (
			<Container className={classes.root}>
				{stories.map((story, index) => {
					let itemDate = new Date(story.time * 1000);
					return (
						<Paper key={story.id} className={classes.newsPaper} square>
							<Container className={classes.lineOne}>
								<Typography component="span">{`${index + 1}. `}</Typography>
								<Link href={story.url} color="inherit" rel="noopener">{story.title}</Link>
								<Typography component="span">{'('}</Typography>
								<Link href="#" color="inherit">{getDomain(story.url!)}</Link>
								<Typography component="span">{')'}</Typography>
							</Container>
							<Container className={classes.lineTwo}>
								<Typography component="span">{`${story.score} points by`}</Typography>
								<Link href="#" color="inherit" rel="noopener">{story.by}</Link>
								<TimeAgo date={itemDate} title={itemDate.toLocaleString()}></TimeAgo>
								<Typography component="span">{'|'}</Typography>
								<Link href="#">{'hide'}</Link>
								<Typography component="span">{'|'}</Typography>
								<Link href="#" color="inherit" rel="noopener">{`${story.descendants} comments`}</Link>
							</Container>
						</Paper>
					)
				})}
				
			</Container>
		)
	}
	return null;
};


export default StoriesListing;
