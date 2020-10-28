import React from "react";
import "./App.css";
import Sign from './Components/Sign in';
import Contact from './Components/Contact us';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  React App code
function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path="/" component={Home}/>
      <Route path="/signin" component={Sign} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;