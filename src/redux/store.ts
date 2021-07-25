import { configureStore } from '@reduxjs/toolkit'

import storiesReducer from './slices/storiesSlice';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    comments: commentsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
