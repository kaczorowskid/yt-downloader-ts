import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/AppContext/AppContextProvider';
import CurrentUserContextProvider from './context/CurrentUserContext/CurrentUserContextProvider';
import LibraryContentContextProvider from './context/LibraryContentContext/LibraryContentContextProvider';


ReactDOM.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <AppContextProvider>
        <LibraryContentContextProvider>
          <App />
        </LibraryContentContextProvider>
      </AppContextProvider>
    </CurrentUserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
