import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalLibrary, MdLockOpen, MdHome, MdCardMembership } from 'react-icons/md'

function Navigation() {

  return (
      <>
    <nav className='top-navigation'>
        <Link to='/' className='logo'><h3>Smart Reads</h3></Link>
        <ul>
            <li><Link to='/' className='nav'><span className='nav'><MdHome/></span>Home</Link></li>
            <li><Link to='/login' className='nav'><span className='nav'><MdLocalLibrary/></span>My Books</Link></li>
            <li><Link to='/register' className='nav'><span className='nav'><MdCardMembership/></span>Join</Link></li>
            <li><Link to='/login' className='nav'><span className='nav'><MdLockOpen/></span>Sign In</Link></li>
        </ul>
        </nav>
        <header>
            <img alt='books in low lit hallway' src='https://i.imgur.com/LsJrzth.jpg'/>
        </header>
    </>
  );
}

export default Navigation;
