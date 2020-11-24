import React from "react";
import Sign from './Components/Home';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  React App code
function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route exact path="/" component={Sign}></Route>
       <Route path="/Contact" component={Contact}></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;