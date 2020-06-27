import React from 'react';

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';
import Layout from './components/Layout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
