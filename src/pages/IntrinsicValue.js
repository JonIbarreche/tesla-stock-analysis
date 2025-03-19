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

const IntrinsicValue = () => {
  return (
    <PageContainer>
      <PageTitle>Intrinsic Value Analysis</PageTitle>
      
      <Card>
        <CardTitle>Valuation Overview</CardTitle>
        <p>This page will provide a detailed analysis of Tesla's intrinsic value using discounted cash flow (DCF) methodology and other valuation metrics.</p>
      </Card>
    </PageContainer>
  );
};

export default IntrinsicValue; 