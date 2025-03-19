import React from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { stockSummary } from '../data/stockData';

const SummaryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 20px;
`;

const StockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const StockTitle = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 5px 0;
  }
  
  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const StockPrice = styled.div`
  text-align: right;
  
  .price {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
  }
  
  .change {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.9rem;
    margin-top: 5px;
    
    &.positive {
      color: #4caf50;
    }
    
    &.negative {
      color: #f44336;
    }
    
    .icon {
      margin-right: 4px;
    }
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const Metric = styled.div`
  .label {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 4px;
  }
  
  .value {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const StockSummary = () => {
  const isPositive = stockSummary.change >= 0;
  
  return (
    <SummaryCard>
      <StockHeader>
        <StockTitle>
          <h2>{stockSummary.symbol}</h2>
          <span>{stockSummary.name}</span>
        </StockTitle>
        <StockPrice>
          <p className="price">${stockSummary.price.toFixed(2)}</p>
          <div className={`change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? <FaArrowUp className="icon" /> : <FaArrowDown className="icon" />}
            {Math.abs(stockSummary.change).toFixed(2)} ({Math.abs(stockSummary.changePercent).toFixed(2)}%)
          </div>
        </StockPrice>
      </StockHeader>
      
      <MetricsGrid>
        {stockSummary.metrics.map((metric, index) => (
          <Metric key={index}>
            <div className="label">{metric.label}</div>
            <div className="value">{metric.value}</div>
          </Metric>
        ))}
      </MetricsGrid>
    </SummaryCard>
  );
};

export default StockSummary; 