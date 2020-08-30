import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='navbar is-dark px-4'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item is-size-4'>
          <i className={`mr-2 ${icon}`}></i>
          <h1 className='has-text-weight-semibold'>{title}</h1>
        </Link>
        <button
          className={`navbar-burger button is-dark ${
            isActive ? 'is-active' : ''
          }`}
          aria-label='menu'
          aria-expanded='false'
          onClick={toggleMenu}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/about' className='navbar-item'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

// default properties for when none are passed in
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
