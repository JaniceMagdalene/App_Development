import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Navbar.css";

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
      <Link to='/home'>
          <li className='LandList1'>HOME</li>
        </Link>
        <Link to='/aboutus'>
          <li className='LandList'>DIET</li>
        </Link>
        <Link to='/contact'>
          <li className='LandList'>SUPPLEMENTS</li>
        </Link>
        <Link to='/loginsignup'>
          <li className='LandList'>FEEDBACK</li>
        </Link>
        <Link to='/Login'>
          <li className='LandList'>LOGIN</li>
        </Link>
     
      </ul>
    </nav>
  );
}

export default Navigation;