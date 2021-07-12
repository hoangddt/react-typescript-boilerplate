import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';


const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    loadPost: (state) => {
      return state
    },
  }
})

export const { loadPost } = postsSlice.actions

export default postsSlice.reducer
