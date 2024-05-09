import React from 'react';
import './Navbar.css';
import logo from './Logo.png';
import profile from './profile_image.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="Loading" />
      <img className='profile' src={profile} alt='Loading' />
    </div>
  );
}

export default Navbar;
