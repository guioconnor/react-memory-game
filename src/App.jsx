import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard.jsx';
import About from './views/About.jsx';
import Error404 from './views/Error404.jsx';
import Navigation from './components/Navigation';

const routes = [
  { uri: '/', label: 'Dashboard', component: Dashboard },
  { uri: '/about', label: 'About', component: About },
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
