import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserRepositories from './components/UserRepositories';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={UserSearch} />
          <Route path="/users/:username" component={UserRepositories} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

