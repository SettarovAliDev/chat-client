import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';
import SocketProvider from './contexts/socket-context/SocketContext';

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </SocketProvider>
  </Provider>,
  document.getElementById('root')
);
