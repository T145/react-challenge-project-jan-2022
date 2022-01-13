import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import { LOGIN_TOKEN } from '../private';

const RouteGuard = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  return auth.token === LOGIN_TOKEN ? children : <Redirect to="/login" />
};

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <RouteGuard>
          <Route path="/order" exact component={OrderForm} />
          <Route path="/order/:id" exact component={OrderForm} />
          <Route path="/view-orders" exact component={ViewOrders} />
        </RouteGuard>
      </Switch>
    </Router>
  );
}

export default AppRouter;
