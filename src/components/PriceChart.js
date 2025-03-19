import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  Area, 
  AreaChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { generatePriceHistory } from '../data/stockData';

const ChartCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 20px;
  margin-top: 20px;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const ChartControls = styled.div`
  display: flex;
  gap: 10px;
`;

const TimeButton = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.active ? 'var(--primary-color)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#e0e0e0'};
  }
`;

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const CustomTooltip = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 10px;
  color: white;
  font-size: 0.8rem;
  
  p {
    margin: 0;
    padding: 0;
  }
  
  .date {
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .price {
    font-weight: 700;
  }
`;

const PriceChart = () => {
  const [timeRange, setTimeRange] = useState('1m');
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    // Generate price data based on selected time range
    const data = generatePriceHistory(timeRange);
    setChartData(data);
  }, [timeRange]);
  
  // Format for the tooltip
  const CustomTooltipContent = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltip>
          <p className="date">{label}</p>
          <p className="price">${payload[0].value}</p>
        </CustomTooltip>
      );
    }
    
    return null;
  };
  
  return (
    <ChartCard>
      <ChartHeader>
        <ChartTitle>TSLA Price History</ChartTitle>
        <ChartControls>
          <TimeButton active={timeRange === '1d'} onClick={() => setTimeRange('1d')}>1D</TimeButton>
          <TimeButton active={timeRange === '1w'} onClick={() => setTimeRange('1w')}>1W</TimeButton>
          <TimeButton active={timeRange === '1m'} onClick={() => setTimeRange('1m')}>1M</TimeButton>
          <TimeButton active={timeRange === '6m'} onClick={() => setTimeRange('6m')}>6M</TimeButton>
          <TimeButton active={timeRange === '1y'} onClick={() => setTimeRange('1y')}>1Y</TimeButton>
          <TimeButton active={timeRange === '5y'} onClick={() => setTimeRange('5y')}>5Y</TimeButton>
        </ChartControls>
      </ChartHeader>
      
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
              tickMargin={10}
            />
            <YAxis 
              domain={['dataMin - 10', 'dataMax + 10']} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
              tickMargin={10}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="var(--primary-color)" 
              fillOpacity={1} 
              fill="url(#colorPrice)" 
              strokeWidth={2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </ChartCard>
  );
};

export default PriceChart; 