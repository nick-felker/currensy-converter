import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

export * from './ui';
export * from './types';
export * from './hooks';
export * from './redux';

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={null}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


