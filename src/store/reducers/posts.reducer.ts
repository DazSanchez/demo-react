import { createReducer } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { getPosts, getPostsError, getPostsSuccess } from '../actions/posts.actions';

export const key = 'posts';

export type State = {
  loading: boolean;
  error: any;
  result: Post[];
};

const initialState: State = {
  error: null,
  loading: false,
  result: [],
};

export const reducer = createReducer<State>(initialState, (builder) => {
  return builder
    .addCase(getPosts, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getPostsSuccess, (state, { payload }) => {
      state.loading = false;
      state.result = payload;
    })
    .addCase(getPostsError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
