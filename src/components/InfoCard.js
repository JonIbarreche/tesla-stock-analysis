import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 20px;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  .icon {
    font-size: 1.8rem;
    margin-right: 15px;
    color: var(--primary-color);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: var(--secondary-color);
`;

const CardContent = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const InfoCard = ({ icon, title, children }) => {
  return (
    <Card>
      <CardHeader>
        <div className="icon">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard; 