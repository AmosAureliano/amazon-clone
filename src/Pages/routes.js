import React from 'react';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home/index';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/checkout" component={Checkout} />
                
                <Route path="/login" component={Login} />
                
                <Route path="/" exact component={Home} />
            </Switch>
          
            
        </BrowserRouter>
    );
}