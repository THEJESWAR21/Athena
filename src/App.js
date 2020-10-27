import React from "react";
import "./App.css";
import Sign from './Components/Sign in';
import Contact from './Components/Contact us';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  React App code
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/signin" component={Sign}></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
    </Router>
  );
}

export default App;
