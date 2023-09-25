import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import '../assets/css/Footer.css';

function Footer() {
  return (
    <div className="footer">
              <p className="copyright">© 2023 CareBee. All Rights Reserved.</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/faq">FAQ</Link>
      </div>

    </div>
  );
}

export default Footer;
