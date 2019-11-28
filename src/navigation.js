import React from 'react';
import { Route, Link } from 'react-router-dom';
import Register from './landing-page/register';
import Login from './landing-page/login';

function Navigation() {

  return (
      <>
    <nav className='top-navigation'>
        <Link to='/' className='logo'><h3>Smart Reads</h3></Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>My Books</Link></li>
            <li><Link to='/register'>Join</Link></li>
            <li><Link to='/login'>Sign In</Link></li>
        </ul>
        </nav>
        <header>
            <img alt='books in low lit hallway' src='https://i.imgur.com/LsJrzth.jpg'/>
        </header>



        <Route exact path='/' />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
    </>
  );
}

export default Navigation;
