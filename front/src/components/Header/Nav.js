import React from 'react'; 
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Header.scss'
export default () => {
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li>
            <Link className='nav-link' to="/map">Map</Link>
          </li>
          <li>
            <Link className='nav-link' to="/history">History</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}