import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-left: 10px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  .menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 15px;
    color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  
  .nav-icon {
    font-size: 1.2rem;
    margin-left: 20px;
    color: var(--secondary-color);
    cursor: pointer;
  }
  
  .search-container {
    position: relative;
    
    input {
      padding: 8px 12px;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      font-size: 0.9rem;
      width: 200px;
      outline: none;
    }
    
    .search-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--secondary-color);
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavMenu>
        <FaBars className="menu-toggle" />
        <Logo>
          <h1>TESLA STOCK ANALYSIS</h1>
        </Logo>
      </NavMenu>
      
      <NavRight>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <FaBell className="nav-icon" />
        <FaUserCircle className="nav-icon" />
      </NavRight>
    </NavbarContainer>
  );
};

export default Navbar; 