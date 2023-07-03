import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div class="opener card  ">
      <nav>
        <div class='nav-wrapper card shadow z-3'>
        <ul className="navbar-list">
          <li>
  <a href="/" className="buttonn wave-effect waves-light btn hoverable">
    <FontAwesomeIcon icon={faHome} />
    <span>Home</span>
  </a>
</li>
<li >
  <a href="/about" className="buttonn wave-effect waves-light btn hoverable">
    <FontAwesomeIcon icon={faInfoCircle} />
    <span>About</span>
  </a>
</li>


        </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
