import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import {
    CommentState,
} from '../../types/CommentType';
import { getComments } from '../../services/HNNews';


const fetchComments = createAsyncThunk("comments/fetchComments", getComments);

interface InitialCommentsState {
    comments: CommentState[];
    fetchStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    fetchError: string | null;
}

const initialState: InitialCommentsState = {
    comments: [],
    fetchStatus: 'idle',
    fetchError: null
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {
        submitComment: (state, action) => {
            console.log("/submitComment/: ", action);
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.fetchStatus = "succeeded";
            state.comments = action.payload;
        });
        builder.addCase(fetchComments.pending, (state) => {
            state.fetchStatus = 'loading';
        });
        builder.addCase(fetchComments.rejected, (state, action) => {
            console.log(action);
            state.fetchStatus = 'failed';
        });
    }
});

export { fetchComments };
export default commentsSlice.reducer;
