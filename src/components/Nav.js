import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Performer">Performer</Link>
          </li>
          <li>
            <Link to="/Socials">Socials</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
