import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CityDetails, Home} from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/city-details/:cityId">
            <CityDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
