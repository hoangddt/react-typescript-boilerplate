import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {
  StoryState,
} from '../../types/StoryType';
import { getItems } from '../../services/HNNews';


const fetchStories = createAsyncThunk("stories/fetchStories", getItems);

interface InitialStoriesState {
  stories: StoryState[];
  fetchStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  fetchError: string | null;
}

const initialState: InitialStoriesState = {
  stories: [],
  fetchStatus: 'idle',
  fetchError: null
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState: initialState,
  reducers: {
    // loadStories: (state) => {
    //   return state
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      console.log('/fetchStories.fulfilled/');
      console.log(action);
      state.fetchStatus = 'succeeded';
      state.stories = action.payload;
    });
    builder.addCase(fetchStories.pending, (state, action) => {
      console.log('/fetchStories.pending/');
      console.log(action);
      state.fetchStatus = 'loading';
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      console.log('/fetchStories.rejected/');
      console.log(action);
      state.fetchStatus = 'failed';
    });
  }
})

// export const { loadStories } = storiesSlice.actions;

export { fetchStories };
export default storiesSlice.reducer;
