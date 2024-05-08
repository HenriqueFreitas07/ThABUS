import React from 'react';
import '../theme/main.css';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
      
  const handleIconClick = () => {
    history.goBack();
  };

  return (
    <div className="navbar">
      <div className="navbar-icon" onClick={handleIconClick}>
        <img src="/icons/arrowback.svg" alt="" />
      </div>

      <div className="logo">
        <Link to="/">
          <img src="/icons/logo.svg" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-icon">
        <img src="/icons/question.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
