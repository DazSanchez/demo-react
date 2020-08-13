import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { key, State } from '../reducers/posts.reducer';

const selectPostsState = (state: RootState): State => state[key];

export const selectLoading = createSelector(selectPostsState, (state) => state.loading);

export const selectError = createSelector(selectPostsState, (state) => state.error);

export const selectResult = createSelector(selectPostsState, (state) => state.result);
