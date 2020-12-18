import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
import page1 from "./Components/Page1";
import page2 from "./Components/Page2";
import menubar from "./Components/Menubar";

class App extends Component {
  render() {
    return (
      <Router>
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={menubar}/>
          <Route path="/page1" component={page1} />
          <Route path="/page2" component={page2} />
    
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  
        
        
    );
  }
}

export default App;