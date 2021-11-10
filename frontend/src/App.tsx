import dotenv from 'dotenv';
import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './views/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { config } from './config';
import axios from 'axios';
import PrivateRoute from './privateRoutes/PrivateRoutes'
import RegisterDone from './views/RegisterDone/RegisterDone';
import Confirm from './views/Confirm/Confirm';
import ResetPassword from './views/ResetPassword/ResetPassword';
axios.defaults.withCredentials = true;
dotenv.config();

const App: React.FC = () => {

  const { home, login, register, registerDone, confirm, resetPassword } = config.routerPath

  return (
    < >
      <GlobalStyle />
      <Router>
        <Switch>
          <PrivateRoute path={login} component={Login} />
          <PrivateRoute path={register} component={Register} />
          <Route exact path = {resetPassword} component = {ResetPassword} />
          <Route exact path = {confirm} component = {Confirm} />
          <Route exact path = {registerDone} component = {RegisterDone} />
          <Route exact path={home} component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
