import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    listStyle: 'none',
    marginRight: '15px'
  };

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px' }}>
        <div className="logo" style={{ color: 'white', fontSize: '24px' }}>Travlia</div>

        <div className="menu" style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={linkStyle}><li style={{ listStyle: 'none' }}>Home</li></Link>
          <Link to="/b" style={linkStyle}><li>Blog</li></Link>
          <Link to="/information" style={linkStyle}><li>Information</li></Link>
          <Link to="/feedback" style={linkStyle}><li>Feedback</li></Link>
        </div>

        <div className="search">  
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            style={{ color: 'white' }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
