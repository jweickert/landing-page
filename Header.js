import React from 'react';

import '../styles/Header.css';

function Header() {
  return (
      <div className="header">
        <span className="header-title">
          <img src="https://i.imgur.com/qqTqVNS.png" />
        </span>
        <br />
        <span className="header-text">
          Health & Insurance Management System
        </span>
      </div>
    )
}


export default Header
