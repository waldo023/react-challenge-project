import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/order" exact render={() => props.auth.email? <OrderForm/>:<Redirect to="/login"/> } />
      <Route path="/view-orders" exact render={() => props.auth.email? <ViewOrders/>:<Redirect to="/login"/> } />
    </Router>
  );
}

export default connect(mapStateToProps,null) (AppRouter);
