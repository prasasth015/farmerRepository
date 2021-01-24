import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Button.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3 style={{"marginBottom":"26px"}}>Farmer Assistance </h3>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/supplierLogin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Supplier
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/farmerLogin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Farmer
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Logout
              </Link>
            </li>

               
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
              
            </ul>
        <button style={{"color":"white","marginBottom":"21px","width":"140px","borderRadius":"10px"}}><span  style={{"color":"black"}} ><Link to="/adminLogin" style={{"color":"black"}}>Admin </Link></span></button>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
