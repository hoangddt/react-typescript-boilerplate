import React from 'react';
import { Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoadingSpinner from './LoadingSpinner';
import InfoText from './InfoText';
import CommentState from '../types/CommentType';
import TimeAgo from 'react-timeago';


const commentSelector = (state: RootState) => state.comments.comments;
const statusSelector = (state: RootState) => state.comments.fetchStatus;
const errorSelector = (state: RootState) => state.comments.fetchError;

const useFormStyles = makeStyles((theme: Theme) => ({
        commentForm: {
            width: '350px',
            display: 'flex',
            flexDirection: 'column'
        }
    })
);


interface CommentEntityProps {
    comment: CommentState,
    level?: number
}


const CommentEntity = ({comment, level = 0}: CommentEntityProps) => {
    let itemDate = new Date(comment.time * 1000);
    let renderChildren = false;
    try {
        renderChildren = comment.kids.length > 0;
    }
    catch {
    }
    
    return (
        <Container>
            <Paper>
                <Container>
                    <ArrowDropUpIcon>up_vote</ArrowDropUpIcon>
                    <Link href="#" color="inherit" rel="noopener">{comment.by}</Link>
                    <TimeAgo date={itemDate} title={itemDate.toLocaleString()}></TimeAgo>
                    <Link href="#" color="inherit" rel="noopener">{'collapse'}</Link>
                </Container>
                <Container>
                    <Typography>{comment.text}</Typography>
                </Container>
                <Container>
                    <Link href="#">{'reply'}</Link>
                </Container>
            </Paper>
            <Paper className="child">
                {
                    (renderChildren) ? <Typography>Children inside</Typography> : null
                }
            </Paper>
        </Container>
    )
};


const CommentList = () => {
    const comments = useSelector(commentSelector);
    const fetchStatus = useSelector(statusSelector);
    const fetchError = useSelector(errorSelector);

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

    if (fetchStatus === 'succeeded') {
        return (
			<Container>
                {comments.map((comment, index) => {
                    return <CommentEntity comment={comment}></CommentEntity>
                })}
            </Container>
		)
    }
    return null;
}


export { CommentEntity };
export default CommentList;
