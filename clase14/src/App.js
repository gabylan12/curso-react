import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import './App.css';


const fakeAuth = {
  isAuthenticated: false,
  // Acá podríamos indicar la presencia de un JWT o cookie
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // Simulamos la demora de una llamada a una API
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // Simulamos la demora de una llamada a una API
  }
}

const Public = () => (
  <h1>Public</h1>);

const Private = () => (
  <h1>Private</h1>);

const Login = () => (
  <h1>Login</h1>);

const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <Route {...otherProps} render={props => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/public">Link a página pública</Link></li>
        <li><Link to="/private">Link a página privada</Link></li>
      </ul>
      <Route path="/public" component={Public} />
      <PrivateRoute path='/private' component={Private} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
