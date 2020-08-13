import { Axios } from 'axios-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../types/post';

export const getPostAPI = (): Observable<Post[]> => {
  return Axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
    map(({ data }) => data)
  );
};
