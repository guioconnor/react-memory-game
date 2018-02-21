import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard.jsx';
import EmojiMemoryGame from './views/EmojiMemoryGame.jsx';
import LettersMemoryGame from './views/LettersMemoryGame.jsx';
import Error404 from './views/Error404.jsx';
import Navigation from './components/Navigation';

const routes = [
  { uri: '/', label: 'Dashboard', component: Dashboard },
  { uri: '/emoji', label: 'Emoji', component: EmojiMemoryGame },
  { uri: '/letters', label: 'Letters', component: LettersMemoryGame },
];

const App = () => (
  <Router>
    <div>
      <Navigation routes={routes} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/emoji" component={EmojiMemoryGame} />
        <Route exact path="/letters" component={LettersMemoryGame} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default App;
