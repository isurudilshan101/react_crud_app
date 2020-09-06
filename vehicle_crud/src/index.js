import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrouserRouter>
    <App/>
  </BrouserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
