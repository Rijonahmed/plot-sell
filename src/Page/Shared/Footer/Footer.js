import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <footer className='footer'>
      <p>CopyRight &#169; {year}</p>

    </footer>
  );
};

export default Footer;