import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Page}/>
      </Switch>
    </div>
  );
}

export default App;
