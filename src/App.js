// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Profile from './component/Profile';
import PrivateRoute from './component/PrivateRoute';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/auth-login" element={<Login />} />
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
      </Router>
  );
}

export default App;
