import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './components';
import App from './app';

import { Provider } from 'react-redux';
import store from '~/redux/store';
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Provider>
  </>
);
