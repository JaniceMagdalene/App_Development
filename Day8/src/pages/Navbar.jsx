import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'; // Your custom CSS file
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
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
          <li className='LandList'><i className="fa fa-envelope"></i> FEEDBACK</li>
        </Link>
        <Link to='/'>
          <li className='LandList'><i className="fa fa-lock"></i> LOGIN</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
