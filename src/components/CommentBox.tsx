import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useFormStyles = makeStyles((theme: Theme) => ({
        commentForm: {
            width: '350px',
            display: 'flex',
            flexDirection: 'column'
        }
    })
);

const CommentBox = () => {
    const classes = useFormStyles();
    return (
        <form className={classes.commentForm} noValidate autoComplete="off">
            <TextField multiline rows={4} variant="outlined"></TextField>
            <Button variant="contained">Comment</Button>
        </form>
    )
};


export default CommentBox;
