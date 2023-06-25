import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div>
      <nav className="navigation-bar">
        <ul className="navbar-list">
          <li className="nav-item">
  <Link to="/" className="nav-link">
    <FontAwesomeIcon icon={faHome} />
    <span>Home</span>
  </Link>
</li>
<li className="nav-item">
  <Link to="/about" className="nav-link">
    <FontAwesomeIcon icon={faInfoCircle} />
    <span>About</span>
  </Link>
</li>


        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
