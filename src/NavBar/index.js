import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <div>
      <nav className="navigation-bar">
        <ul className="navbar-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
