import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { getPostAPI } from '../../api/posts.api';
import {
  GetPosts,
  getPosts,
  GetPostsError,
  getPostsError,
  GetPostsSuccess,
  getPostsSuccess,
} from '../actions/posts.actions';

type GetPostsOutputActions = GetPostsSuccess | GetPostsError;

type GetPostsInputActions = GetPosts | GetPostsOutputActions;

const getPostsEpic$: Epic<GetPostsInputActions, GetPostsOutputActions> = (actions$) =>
  actions$.pipe(
    filter(getPosts.match),
    switchMap(() =>
      getPostAPI().pipe(
        map((posts) => getPostsSuccess(posts)),
        catchError((err) => of(getPostsError(err)))
      )
    )
  );

export type PostsInputActions = GetPostsInputActions;

export type PostsOutputActions = GetPostsOutputActions;

export const postsEpic$ = combineEpics(getPostsEpic$);
