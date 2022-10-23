import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todo';
import { logger } from './middleware';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  todoReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares().concat(logger);
  },
});

export type RootState = ReturnType<typeof reducers>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
