import dotenv from 'dotenv';
import React from 'react';
import GlobalStyle from './GlobalSStyle';
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
import RegisterDone from './components/RegisterDone/RegisterDone';
import Confirm from './components/Confirm/Confirm';
axios.defaults.withCredentials = true;
dotenv.config();

const App: React.FC = () => {

  const { home, login, register, registerDone, confirm } = config.routerPath

  return (
    < >
      <GlobalStyle />
      <Router>
        <Switch>
          <PrivateRoute path={login} component={Login} />
          <PrivateRoute path={register} component={Register} />
          <Route path = {confirm} component = {Confirm} />
          <Route path = {registerDone} component = {RegisterDone} />
          <Route exact path={home} component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
