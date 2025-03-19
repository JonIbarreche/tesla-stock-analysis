import React from 'react';
import styled from 'styled-components';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';
import { technicalData, generatePriceHistory } from '../data/stockData';

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

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LevelContainer = styled.div`
  margin-top: 20px;
`;

const PriceLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: 500;
  }
  
  .value {
    font-family: monospace;
    font-size: 1.1rem;
  }
  
  &.current {
    color: var(--primary-color);
    font-weight: 700;
  }
  
  &.resistance {
    color: #f44336;
  }
  
  &.support {
    color: #4caf50;
  }
`;

const IndicatorTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  th, td {
    padding: 10px;
    border-bottom: 1px solid var(--border-color);
    text-align: left;
  }
  
  th {
    background-color: #f8f8f8;
    font-weight: 500;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  .interpretation {
    display: flex;
    align-items: center;
    
    .icon {
      margin-right: 8px;
      
      &.bullish {
        color: #4caf50;
      }
      
      &.bearish {
        color: #f44336;
      }
      
      &.neutral {
        color: #757575;
      }
    }
  }
`;

const TechnicalAnalysis = () => {
  // Get simulated price history data for 6 months
  const chartData = generatePriceHistory('6m');
  
  // Get technical indicators and levels
  const { keyLevels, indicators } = technicalData;
  
  // Get interpretation icon
  const getInterpretationIcon = (interpretation) => {
    if (interpretation.toLowerCase().includes('bullish')) {
      return <FaArrowUp className="icon bullish" />;
    } else if (interpretation.toLowerCase().includes('bearish')) {
      return <FaArrowDown className="icon bearish" />;
    } else {
      return <FaMinus className="icon neutral" />;
    }
  };
  
  return (
    <PageContainer>
      <PageTitle>Technical Analysis</PageTitle>
      
      <Card>
        <CardTitle>Price Chart with Key Levels</CardTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 20', 'dataMax + 20']} tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
              <Line type="monotone" dataKey="price" stroke="var(--primary-color)" strokeWidth={2} dot={false} />
              
              {/* Current Price Line */}
              <ReferenceLine y={keyLevels.current} stroke="var(--primary-color)" strokeDasharray="3 3" label="Current" />
              
              {/* Resistance Levels */}
              {keyLevels.resistance.map((level, index) => (
                <ReferenceLine 
                  key={`resistance-${index}`} 
                  y={level} 
                  stroke="#f44336" 
                  strokeDasharray="3 3" 
                  label={`R${index + 1}`} 
                />
              ))}
              
              {/* Support Levels */}
              {keyLevels.support.map((level, index) => (
                <ReferenceLine 
                  key={`support-${index}`} 
                  y={level} 
                  stroke="#4caf50" 
                  strokeDasharray="3 3" 
                  label={`S${index + 1}`} 
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
      
      <GridContainer>
        <Card>
          <CardTitle>Key Price Levels</CardTitle>
          <LevelContainer>
            <PriceLevel className="current">
              <span className="label">Current Price</span>
              <span className="value">${keyLevels.current.toFixed(2)}</span>
            </PriceLevel>
            
            {keyLevels.resistance.map((level, index) => (
              <PriceLevel key={`resistance-${index}`} className="resistance">
                <span className="label">Resistance {index + 1}</span>
                <span className="value">${level.toFixed(2)}</span>
              </PriceLevel>
            ))}
            
            {keyLevels.support.map((level, index) => (
              <PriceLevel key={`support-${index}`} className="support">
                <span className="label">Support {index + 1}</span>
                <span className="value">${level.toFixed(2)}</span>
              </PriceLevel>
            ))}
          </LevelContainer>
        </Card>
        
        <Card>
          <CardTitle>Technical Indicators</CardTitle>
          <IndicatorTable>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Value</th>
                <th>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {indicators.map((indicator, index) => (
                <tr key={index}>
                  <td>{indicator.name}</td>
                  <td>{indicator.value}</td>
                  <td className="interpretation">
                    {getInterpretationIcon(indicator.interpretation)}
                    {indicator.interpretation}
                  </td>
                </tr>
              ))}
            </tbody>
          </IndicatorTable>
        </Card>
      </GridContainer>
      
      <Card>
        <CardTitle>Trading Insight</CardTitle>
        <p>
          Based on current technical indicators, Tesla stock is showing mixed signals. 
          The price is currently above both the 50-day and 200-day moving averages, which is generally bullish. 
          However, the RSI at 59.31 indicates neutral momentum, neither overbought nor oversold.
        </p>
        <p>
          Key resistance levels are at $300.00, $350.00, and $400.00, while support can be found at $250.00, $200.00, and $175.00. 
          The current price of $284.65 is approaching the first resistance level, which may act as a ceiling in the short term.
        </p>
        <p>
          Volume has been above average recently, indicating increased interest in the stock. 
          Traders should watch for a break above $300.00 with strong volume for a potential continuation of the upward trend, 
          or a break below $250.00 which could signal further downside.
        </p>
      </Card>
    </PageContainer>
  );
};

export default TechnicalAnalysis; 