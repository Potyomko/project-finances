import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import {router} from './router'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='207672419068-1a6fiiuoitatsehrh3b1a7rs71c73al5.apps.googleusercontent.com'>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router}>
          <BrowserRouter basename="/project-finances">
            <App />
          </BrowserRouter>
        </RouterProvider>
      </Provider>
    </PersistGate>
  </GoogleOAuthProvider>
);
