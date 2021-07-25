import CommentList from '../../components/CommentEntity';
import NavBar from '../../components/NavBar';
import { useBodyStyles } from '../../styles/materialui-custom/multiStyle';


const StoryDetailPage = () => {
    const classes = useBodyStyles();

    return (
        <div className={classes.root}>
            <NavBar isChild={true}></NavBar>
            <CommentList></CommentList>
        </div>
    )
}


export default StoryDetailPage;
