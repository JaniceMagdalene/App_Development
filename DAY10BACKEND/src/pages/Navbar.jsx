import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'; // Your custom CSS file
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className='landingNav'>
      <span className='CustomSymbol'>
        <span className='CareText'>Care</span>
        <span className='BeeText'>Bee</span>
      </span>

      <div className={`dropdown-toggle ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
        <i className={`fa ${showDropdown ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <ul className={`landingUl ${showDropdown ? 'show' : ''}`}>
        <Link to='/home'>
          <li className='LandList1'><i className="fa fa-home"></i> HOME</li>
        </Link>
        <Link to='/diet'>
          <li className='LandList'><i className="fa fa-utensils"></i> DIET</li>
        </Link>
        <Link to='/ecohaven'>
          <li className='LandList'><i className="fa fa-leaf"></i> ECO-HAVEN</li>
        </Link>
        <Link to='/sanitation'>
          <li className='LandList'><i className="fa fa-shower"></i> SANITATION</li>
        </Link>
        <Link to='/mobilizing'>
          <li className='LandList'><i className="fa fa-hand-holding-medical"></i> MOBILIZING</li>
        </Link>
        <Link to='/feedback'>
          <li className='LandList'><i className="fa fa-phone"></i> CONTACT</li>
        </Link>
        <Link to='/form'>
          <li className='LandList'><i className="fa fa-envelope"></i> REQUEST</li>
        </Link>
        <Link to='/'>
          <li className='LandList'><i className="fa fa-lock"></i> LOGIN</li>
        </Link>
      </ul>
      <ul className={`mobile-nav ${showDropdown ? 'active' : ''}`}>
        <Link to='/home'>
          <li><i className="fa fa-home"></i> HOME</li>
        </Link>
        <Link to='/diet'>
          <li className='LandList'><i className="fa fa-utensils"></i> DIET</li>
        </Link>
        <Link to='/ecohaven'>
          <li className='LandList'><i className="fa fa-leaf"></i> ECO-HAVEN</li>
        </Link>
        <Link to='/sanitation'>
          <li className='LandList'><i className="fa fa-shower"></i> SANITATION</li>
        </Link>
        <Link to='/mobilizing'>
          <li className='LandList'><i className="fa fa-hand-holding-medical"></i> MOBILIZING</li>
        </Link>
        <Link to='/feedback'>
          <li className='LandList'><i className="fa fa-phone"></i> CONTACT</li>
        </Link>
        <Link to='/form'>
          <li className='LandList'><i className="fa fa-envelope"></i> REQUEST</li>
        </Link>
        <Link to='/'>
          <li className='LandList'><i className="fa fa-lock"></i> LOGIN</li>
        </Link>
        </ul>
    </nav>
  );
}

export default Navigation;
