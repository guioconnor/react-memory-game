import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navigation = ({ routes }) => (
  <nav>
    <ul>
      {routes.map(route => (
        <li>
          <Link to={route.uri}>{route.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.prototype = {
  routes: PropTypes.object.isRequired,
};

export default Navigation;
