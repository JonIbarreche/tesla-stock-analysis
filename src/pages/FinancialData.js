import React from 'react';
import styled from 'styled-components';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { financialData } from '../data/stockData';

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

const FinancialDataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DataTable = styled.table`
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
  
  tr:hover td {
    background-color: #f0f0f0;
  }
`;

const FinancialData = () => {
  return (
    <PageContainer>
      <PageTitle>Financial Data Analysis</PageTitle>
      
      <Card>
        <CardTitle>Revenue Growth (in billions USD)</CardTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={financialData.revenue}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `$${value}B`} />
              <Tooltip formatter={(value) => [`$${value}B`, 'Revenue']} />
              <Bar dataKey="revenue" fill="var(--primary-color)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
      
      <Card>
        <CardTitle>Profit Margins (in %)</CardTitle>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={financialData.margins}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, '']} />
              <Legend />
              <Line type="monotone" dataKey="gross" stroke="#8884d8" strokeWidth={2} name="Gross Margin" />
              <Line type="monotone" dataKey="operating" stroke="#82ca9d" strokeWidth={2} name="Operating Margin" />
              <Line type="monotone" dataKey="net" stroke="var(--primary-color)" strokeWidth={2} name="Net Margin" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
      
      <FinancialDataGrid>
        <Card>
          <CardTitle>Balance Sheet Highlights</CardTitle>
          <DataTable>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {financialData.balanceSheet.map((item, index) => (
                <tr key={index}>
                  <td>{item.metric}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </Card>
        
        <Card>
          <CardTitle>Cash Flow Analysis</CardTitle>
          <DataTable>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {financialData.cashFlow.map((item, index) => (
                <tr key={index}>
                  <td>{item.metric}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </Card>
      </FinancialDataGrid>
    </PageContainer>
  );
};

export default FinancialData; 