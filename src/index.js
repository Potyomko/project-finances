import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {router} from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </PersistGate>
);
