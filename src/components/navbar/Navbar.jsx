import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../navbar/Navbar.css'; 
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className='navbar_con'>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <Link to="/">
            <img className='brand-logo' src={logo} alt='Brand Logo' width='173' height='40' />
          </Link>
        </div>

        <div className='navbar-links'>
          <Link className='nav-link' to="#why-choose-us">Why Choose Us</Link>
          <Link className='nav-link' to="#gallery">Our Works</Link>
          <Link className='nav-link' to="#gallery">About Us</Link>
          <Link className='nav-link' to="#testimonials">Testimonials</Link>
        </div>

        <div className='navbar-call'>
          <a href="tel:1-800-123-1234" className='call-link'>
            {/* <span className='call-icon'>📞</span> */}
            <span className='call-icon'>
              <FontAwesomeIcon icon={faMobileAlt} /> 
            </span>
            <span className='call-text'>1-800-123-1234</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
