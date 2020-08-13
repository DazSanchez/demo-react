import { combineEpics, createEpicMiddleware } from 'redux-observable';

type AllInputActions = any;

type AllOutputActions = any;

export const epicMiddleware = createEpicMiddleware();

export const rootEpic$ = combineEpics();
