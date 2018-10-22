import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './state';

function App() {
  return (
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  );
}

export default App;
