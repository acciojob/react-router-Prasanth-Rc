import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/" data-test="home-link">Home</Link></li>
        <li><Link to="/about" data-test="about-link">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
