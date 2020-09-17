import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
       <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/" exact>
            <Header/>
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
