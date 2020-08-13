import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { postsEpic$, PostsInputActions, PostsOutputActions } from './posts.epics';

type AllInputActions = PostsInputActions;

type AllOutputActions = PostsOutputActions;

export const epicMiddleware = createEpicMiddleware<AllInputActions, AllOutputActions>();

export const rootEpic$ = combineEpics(postsEpic$);
