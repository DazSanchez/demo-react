import { createAction } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { withPayloadType } from '../../utils';

export const getPosts = createAction('[Post] Get Posts');

export type GetPosts = ReturnType<typeof getPosts>;

export const getPostsSuccess = createAction('[Post] Get Posts Success', withPayloadType<Post[]>());

export type GetPostsSuccess = ReturnType<typeof getPostsSuccess>;

export const getPostsError = createAction('[Post] Get Posts Error', withPayloadType<any>());

export type GetPostsError = ReturnType<typeof getPostsError>;
