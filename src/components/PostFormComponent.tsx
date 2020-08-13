import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import * as yup from 'yup';

const initialValues = {
  title: '',
  body: '',
};

const validationSchema = yup.object<typeof initialValues>({
  title: yup.string().required('Esto es requerido'),
  body: yup.string().required('Esto es requerido'),
});

type Props = {
  onSubmit: (values: any) => void;
};

const PostFormComponent: FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type='text' name='title' placeholder='Titulo' />
        <Field type='text' name='body' placeholder='Contenido' />

        <ErrorMessage name='title'>{(msg) => <p>{msg}</p>}</ErrorMessage>
        <ErrorMessage name='body'>{(msg) => <p>{msg}</p>}</ErrorMessage>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
};

export default PostFormComponent;
