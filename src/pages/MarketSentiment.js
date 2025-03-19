import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 15px 0;
  color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
`;

const MarketSentiment = () => {
  return (
    <PageContainer>
      <PageTitle>Market Sentiment Analysis</PageTitle>
      
      <Card>
        <CardTitle>Market Sentiment Overview</CardTitle>
        <p>This page will display analyst ratings, price targets, and social media sentiment for Tesla stock.</p>
      </Card>
    </PageContainer>
  );
};

export default MarketSentiment; 