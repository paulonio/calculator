/* eslint-env browser */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from '@store';

import App from '@components/App/App';
import Theme from '@components/Theme/Theme';

const root = createRoot(document.querySelector('.root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
