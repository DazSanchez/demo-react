import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../store/actions/posts.actions';
import { RootState } from '../store/reducers';
import { selectLoading, selectResult } from '../store/selectors/posts.selectors';

const conector = connect(
  (state: RootState) => ({
    loading: selectLoading(state),
    posts: selectResult(state),
  }),
  {
    fetchPosts: () => getPosts(),
  }
);

type ReduxProps = ConnectedProps<typeof conector>;

type Props = ReduxProps;

const HomeScreen: FC<Props> = ({ loading, posts, fetchPosts }) => {
  return (
    <div>
      <button onClick={fetchPosts}>Cargar</button>
      <Link to='/add'>Agregar</Link>
      <p>{loading ? 'Cargando...' : ''}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> | {post.body.substr(0, 50)}...
          </li>
        ))}
      </ul>
    </div>
  );
};

export default conector(HomeScreen);
