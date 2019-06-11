import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login } from '../components';

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

export default AppRouter;
