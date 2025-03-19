import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaHome, 
  FaChartLine, 
  FaNewspaper, 
  FaChartBar, 
  FaUsers, 
  FaCalculator, 
  FaLightbulb 
} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  background-color: white;
  border-right: 1px solid var(--border-color);
  z-index: 900;
  transition: transform var(--transition-speed);
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  width: 100%;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: var(--text-color);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: rgba(232, 33, 39, 0.1);
    color: var(--primary-color);
  }
  
  &.active {
    background-color: rgba(232, 33, 39, 0.2);
    color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
  }
  
  .icon {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  .title {
    font-size: 1rem;
  }
`;

const SidebarTitle = styled.div`
  padding: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Main Navigation</SidebarTitle>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/">
            <FaHome className="icon" />
            <span className="title">Dashboard</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/financial-data">
            <FaChartLine className="icon" />
            <span className="title">Financial Data</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/market-sentiment">
            <FaNewspaper className="icon" />
            <span className="title">Market Sentiment</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/technical-analysis">
            <FaChartBar className="icon" />
            <span className="title">Technical Analysis</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/competitor-comparison">
            <FaUsers className="icon" />
            <span className="title">Competitor Comparison</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/intrinsic-value">
            <FaCalculator className="icon" />
            <span className="title">Intrinsic Value</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/investment-thesis">
            <FaLightbulb className="icon" />
            <span className="title">Investment Thesis</span>
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar; 