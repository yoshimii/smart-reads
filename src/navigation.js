import React from 'react';
import { Route, Link } from 'react-router-dom';
import Register from './landing-page/register';
import Login from './landing-page/login';

function Navigation() {

  return (
    <nav className='top-navigation'>
        <Link to='/'>Home</Link>
        <Link to='/register'>Join</Link>
        <Link to='/login'>Sign In</Link>

        <header>
            <img alt='books in low lit hallway' src='https://i.imgur.com/LsJrzth.jpg'/>
        </header>



        <Route exact path='/' />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
    </nav>
  );
}

export default Navigation;
