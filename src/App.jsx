import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard.jsx';
import Tutorial from './views/Tutorial.jsx';
import Examples from './views/Examples.jsx';
import Error404 from './views/Error404.jsx';
import Navigation from './components/Navigation';

const routes = [
  { uri: '/', label: 'Dashboard', component: Dashboard },
  { uri: '/tutorial', label: 'Tutorial', component: Tutorial },
  { uri: '/examples', label: 'Examples', component: Examples },
];

const App = () => (
  <Router>
    <div>
      <Navigation routes={routes} />
      <Switch>
        {routes.map((route, index) => (
          <Route
            exact
            path={route.uri}
            component={route.component}
            key={index}
          />
        ))}
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default App;
