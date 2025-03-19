import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.2s;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
  opacity: 0.7;
  max-width: 600px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </SocialLinks>
        <Copyright>© {currentYear} Tesla Stock Analysis. All rights reserved.</Copyright>
        <Disclaimer>
          This dashboard is for informational purposes only and does not constitute investment advice.
          The analysis presented is based on historical data and may not predict future performance.
          Tesla® is a registered trademark of Tesla, Inc. This project is not affiliated with Tesla, Inc.
        </Disclaimer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 