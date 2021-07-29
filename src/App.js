import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
