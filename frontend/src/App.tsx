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
import FolderInfo from './views/FolderInfo/FolderInfo';
import { config } from './config';
import axios from 'axios';
axios.defaults.withCredentials = true;
dotenv.config();

const App: React.FC = () => {

  const { home, login, register } = config.routerPath

  return (
    < >
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={login} component={Login} />
          <Route exact path={register} component={Register} />
          <Route exact path={'/folder/:id'} component={FolderInfo} />
          <Route exact path={home} component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
