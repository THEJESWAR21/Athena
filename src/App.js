import React from "react";
import "./App.css";
import Home from './Components/Home';
import Contact from './Components/Contact us';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  React App code
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/contact" component={Contact}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;