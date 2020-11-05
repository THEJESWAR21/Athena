import React from "react";
import "./App.css";
import Sign from './Components/Signin-Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  React App code
function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/" component={Sign}></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;