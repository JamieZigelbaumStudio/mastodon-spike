import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './route/Routes';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          {Routes.map(route => {
            return (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
