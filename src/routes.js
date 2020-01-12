import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/landing-page/register';
import Login from './components/landing-page/login';
import Home from './components/landing-page/Home'

const routes = [
        
        <Route exact path='/' render={(props) => <Home {...props} />}/>,
        <Route path='/register' component={Register} />,
        <Route path='/login' component={Login} />,
    ]

export default routes;