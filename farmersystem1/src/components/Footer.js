import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faUsers,faAddressCard,faMapMarker } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         
        </p>
        <p className='footer-subscription-text'>
          
        </p>
      
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Easy Supplier Farmer Communication</Link>
            <Link to='/'> Boosts business communication </Link>
            <Link to='/'>Complaint to respective dealers</Link>
            
            <Link to='/about'>Improve efficiency in farm production </Link>
            
          </div>
          <div class='footer-link-items'>
            <h2><Link to="/"></Link>Contact Us</h2>
            <Link to='/'><FontAwesomeIcon icon={faMapMarker} /> &nbsp;Address</Link>
            <Link to='/'>4321 California St, San Francisco, CA 12345</Link>
            <Link to='/'> <FontAwesomeIcon icon={faPhone} /> &nbsp; Phone</Link>
            <Link to='/'> +1 123 456 1234</Link>
            <Link to='/'> <FontAwesomeIcon icon={faEnvelope} />&nbsp; Email</Link>
            <Link to='/'>info@company.com</Link>
            
          </div>
        </div>
       
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Farmer Assistance
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Farmer Assistance © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
