import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/home'>Home</Link>
      <Link to='/services'>Services</Link>
      <Link to='/about'>About</Link>

    </header>
  );
};

export default Header;