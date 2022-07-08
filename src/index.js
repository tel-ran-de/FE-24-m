import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';

import { Provider } from 'react-redux'
import store from './storage/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    	<AppRouter />
    </Provider>
  </React.StrictMode>
);

