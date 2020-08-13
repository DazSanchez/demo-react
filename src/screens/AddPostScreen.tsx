import React, { FC } from 'react';
import PostFormComponent from '../components/PostFormComponent';

const AddPostScreen: FC<{}> = () => {
  return (
    <>
      <h1>Agregar post</h1>
      <PostFormComponent onSubmit={(values) => console.log(values)} />
    </>
  );
};

export default AddPostScreen;
