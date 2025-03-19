import React from 'react';
import styled from 'styled-components';
import { 
  FaBullseye, 
  FaChartLine, 
  FaNewspaper, 
  FaBalanceScale 
} from 'react-icons/fa';

import StockSummary from '../components/StockSummary';
import PriceChart from '../components/PriceChart';
import InfoCard from '../components/InfoCard';

const DashboardContainer = styled.div`
  padding-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <PageTitle>Tesla Stock Analysis Dashboard</PageTitle>
      
      <StockSummary />
      <PriceChart />
      
      <CardGrid>
        <InfoCard 
          icon={<FaBullseye />} 
          title="Investment Recommendation"
        >
          <p>Based on our comprehensive analysis, Tesla stock currently has a <strong>Hold/Selective Buy</strong> recommendation for growth investors.</p>
          <p>The current price of <strong>$284.65</strong> appears to be pricing in much of the company's future growth potential.</p>
        </InfoCard>
        
        <InfoCard 
          icon={<FaChartLine />} 
          title="Financial Highlights"
        >
          <p>Revenue grew by <strong>42.28% CAGR</strong> over the past 5 years, reaching <strong>$96.8 billion</strong> in 2023.</p>
          <p>Profitability has improved with operating margins of <strong>10.2%</strong>, higher than most traditional automakers.</p>
        </InfoCard>
        
        <InfoCard 
          icon={<FaNewspaper />} 
          title="Recent Updates"
        >
          <p>Tesla continues to expand its Full Self-Driving capabilities and has begun Cybertruck deliveries in late 2023.</p>
          <p>Competitive pressures are intensifying as traditional automakers accelerate their EV transitions.</p>
        </InfoCard>
        
        <InfoCard 
          icon={<FaBalanceScale />} 
          title="Risk Assessment"
        >
          <p>The primary risks include intensifying competition, execution challenges for new models, and regulatory hurdles.</p>
          <p>Valuation risk is significant given the high P/E ratio of <strong>80.2</strong> compared to the automotive sector average.</p>
        </InfoCard>
      </CardGrid>
    </DashboardContainer>
  );
};

export default Dashboard; 