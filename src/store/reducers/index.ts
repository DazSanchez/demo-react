import { combineReducers } from '@reduxjs/toolkit';
import * as postsReducer from './posts.reducer';

export const rootReducer = combineReducers({
  [postsReducer.key]: postsReducer.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
