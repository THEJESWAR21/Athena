import React from "react";
import Sign from './Components/Home';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Component } from "react";
import Profilepage from './Components/Student portal';
//  React App code
class Application extends Component{

  render() {
    return (
      <Router>
      <div className="App">
       <Switch>
         <Route exact path="/" component={Sign}></Route>
         <Route path="/Contact" component={Contact}></Route>
         <Route path="/studentportal" component={Profilepage}></Route>
       </Switch>
      </div>
      </Router>
    );
  }
 
}

export default Application;