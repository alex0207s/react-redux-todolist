import { configureStore } from '@reduxjs/toolkit';
import a from './slices/todo';

const store = configureStore({
  reducer: {
    a,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
