import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer,{initialState} from './context/reducer';
import {StateProvider} from './context/stateProvider';

ReactDOM.render(
  <React.StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
