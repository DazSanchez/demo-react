import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import './App.css';
import AddPostScreen from './screens/AddPostScreen';
import HomeScreen from './screens/HomeScreen';

type Props = RouteComponentProps;

const App: FC<Props> = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomeScreen />
      </Route>
      <Route path='/add'>
        <AddPostScreen />
      </Route>
    </Switch>
  );
};

export default withRouter(App);
