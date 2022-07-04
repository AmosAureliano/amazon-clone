import React from 'react';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home/index';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function Root(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/checkout" component={Checkout} />
                
                <Route path="/login" component={Login} />
                
                <Route path="/" exact component={Home} />
            </Routes>
        </BrowserRouter>
    );
}