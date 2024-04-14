import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {router} from './router'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='980595423948-cjv1gvrbkd757sgg2uc02j1gd4pfrjn6.apps.googleusercontent.com'>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </Provider>
      </PersistGate>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
