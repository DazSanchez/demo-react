import { configureStore } from '@reduxjs/toolkit';
import { epicMiddleware, rootEpic$ } from './epics';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic$);
