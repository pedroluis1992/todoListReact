import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

///Pages

import Home from './pages/home';
import Users from './pages/users';
import Login from './pages/login';

/// Components
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export default function App() {
  return (
    <Router>
      <div>     
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/login" exact />
          <PrivateRoute component={Home} path="/" exact/>
          <PrivateRoute component={Users} path="/users" exact/>
        </Switch>      
      </div>
    </Router>
  );
}

