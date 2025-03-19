// Tesla Stock Data
// This file contains mock data for the Tesla stock analysis dashboard

// Stock Summary Data
export const stockSummary = {
  symbol: 'TSLA',
  name: 'Tesla, Inc.',
  price: 284.65,
  change: -5.30,
  changePercent: -1.83,
  metrics: [
    { label: 'Market Cap', value: '$900.5B' },
    { label: '52W High', value: '$488.54' },
    { label: '52W Low', value: '$138.80' },
    { label: 'P/E Ratio', value: '80.2' },
    { label: 'EPS', value: '$3.55' },
    { label: 'Dividend', value: 'N/A' },
    { label: 'Volume', value: '123.5M' },
    { label: 'Avg Volume', value: '105.2M' }
  ]
};

// Financial Data
export const financialData = {
  revenue: [
    { year: '2019', revenue: 24.6 },
    { year: '2020', revenue: 31.5 },
    { year: '2021', revenue: 53.8 },
    { year: '2022', revenue: 81.5 },
    { year: '2023', revenue: 96.8 }
  ],
  margins: [
    { year: '2019', gross: 16.6, operating: -0.3, net: -3.5 },
    { year: '2020', gross: 21.0, operating: 6.3, net: 2.4 },
    { year: '2021', gross: 24.1, operating: 12.1, net: 10.5 },
    { year: '2022', gross: 23.5, operating: 16.8, net: 15.7 },
    { year: '2023', gross: 18.2, operating: 10.2, net: 8.9 }
  ],
  balanceSheet: [
    { metric: 'Cash & Equivalents', value: '$29.1B' },
    { metric: 'Total Assets', value: '$101.2B' },
    { metric: 'Total Debt', value: '$6.4B' },
    { metric: 'Total Liabilities', value: '$36.6B' },
    { metric: 'Shareholders\' Equity', value: '$64.6B' },
    { metric: 'Debt-to-Equity Ratio', value: '0.1' }
  ],
  cashFlow: [
    { metric: 'Operating Cash Flow', value: '$18.2B' },
    { metric: 'Capital Expenditures', value: '$8.1B' },
    { metric: 'Free Cash Flow', value: '$10.1B' },
    { metric: 'Cash Used in Investments', value: '$9.3B' },
    { metric: 'Cash from Financing', value: '$-1.1B' },
    { metric: 'Net Change in Cash', value: '$7.8B' }
  ]
};

// Market Sentiment Data
export const marketSentiment = {
  analystRatings: [
    { rating: 'Buy', count: 23 },
    { rating: 'Hold', count: 12 },
    { rating: 'Sell', count: 5 }
  ],
  priceTargets: {
    high: 500.00,
    average: 280.50,
    low: 100.00,
    current: 284.65
  },
  technicalOutlook: [
    { timeframe: 'Short Term (1-3 weeks)', outlook: 'Neutral' },
    { timeframe: 'Medium Term (1-3 months)', outlook: 'Bullish' },
    { timeframe: 'Long Term (6-12 months)', outlook: 'Bullish' }
  ],
  recentNews: [
    {
      title: 'Tesla Expands Full Self-Driving Beta to New Markets',
      date: '2023-12-15',
      source: 'EV News Today',
      sentiment: 'Positive'
    },
    {
      title: 'Cybertruck Production Challenges May Impact Delivery Timeline',
      date: '2023-12-10',
      source: 'Auto Industry Weekly',
      sentiment: 'Negative'
    },
    {
      title: 'Tesla Reports Record Q4 Deliveries Despite Supply Chain Issues',
      date: '2023-12-05',
      source: 'Financial Times',
      sentiment: 'Positive'
    },
    {
      title: 'Competition Intensifies as Legacy Automakers Accelerate EV Plans',
      date: '2023-11-28',
      source: 'Market Insight Journal',
      sentiment: 'Negative'
    }
  ]
};

// Technical Analysis Data
export const technicalData = {
  keyLevels: {
    current: 284.65,
    resistance: [300.00, 350.00, 400.00],
    support: [250.00, 200.00, 175.00]
  },
  indicators: [
    { name: 'RSI (14)', value: '59.31', interpretation: 'Neutral' },
    { name: 'MACD', value: 'Positive', interpretation: 'Bullish' },
    { name: 'Moving Average (50)', value: '240.18', interpretation: 'Bullish (Price Above MA)' },
    { name: 'Moving Average (200)', value: '210.45', interpretation: 'Bullish (Price Above MA)' },
    { name: 'Bollinger Bands', value: 'Middle Band', interpretation: 'Neutral' },
    { name: 'Volume', value: '123.5M vs 105.2M Avg', interpretation: 'Above Average' }
  ]
};

// Competitor Comparison Data
export const competitorData = {
  marketCap: [
    { company: 'Tesla', value: 900.5 },
    { company: 'Toyota', value: 225.4 },
    { company: 'Volkswagen', value: 86.3 },
    { company: 'BYD', value: 95.2 },
    { company: 'Ford', value: 52.1 },
    { company: 'GM', value: 49.8 }
  ],
  revenue: [
    { company: 'Tesla', value: 96.8 },
    { company: 'Toyota', value: 304.5 },
    { company: 'Volkswagen', value: 322.3 },
    { company: 'BYD', value: 79.4 },
    { company: 'Ford', value: 176.2 },
    { company: 'GM', value: 171.8 }
  ],
  profitMargin: [
    { company: 'Tesla', value: 10.2 },
    { company: 'Toyota', value: 7.8 },
    { company: 'Volkswagen', value: 5.6 },
    { company: 'BYD', value: 6.2 },
    { company: 'Ford', value: 3.5 },
    { company: 'GM', value: 4.2 }
  ],
  evMarketShare: [
    { company: 'Tesla', value: 18.4 },
    { company: 'BYD', value: 15.8 },
    { company: 'Volkswagen', value: 14.6 },
    { company: 'GM/Wuling', value: 7.2 },
    { company: 'BMW', value: 5.1 },
    { company: 'Others', value: 38.9 }
  ]
};

// Intrinsic Value Analysis
export const intrinsicValueData = {
  dcfScenarios: [
    { scenario: 'Bull Case', value: 500.00, upside: 75.7 },
    { scenario: 'Base Case', value: 250.00, upside: -12.2 },
    { scenario: 'Bear Case', value: 100.00, upside: -64.9 }
  ],
  growthAssumptions: [
    { metric: 'Revenue Growth (5Y Average)', value: '42.28%' },
    { metric: 'Revenue Growth (Next 5Y Forecast)', value: '20.5% - 30.2%' },
    { metric: 'Free Cash Flow Growth (5Y Average)', value: '64.03%' },
    { metric: 'Free Cash Flow Growth (Next 5Y Forecast)', value: '18.6% - 25.4%' },
    { metric: 'Terminal Growth Rate', value: '3.0% - 4.5%' }
  ],
  valuationRatios: [
    { metric: 'Current P/E Ratio', value: '80.2x' },
    { metric: 'Forward P/E Ratio', value: '63.8x' },
    { metric: 'Industry Average P/E', value: '18.5x' },
    { metric: 'Price/Sales Ratio', value: '9.3x' },
    { metric: 'EV/EBITDA', value: '41.2x' }
  ]
};

// Investment Thesis
export const investmentThesis = {
  swot: {
    strengths: [
      'Strong brand recognition and customer loyalty',
      'Technology leadership in EVs and battery management',
      'Vertical integration and manufacturing scale',
      'Software capabilities and data collection advantage',
      'Energy business growth potential'
    ],
    weaknesses: [
      'Premium pricing limiting mass market adoption',
      'Limited model range compared to traditional automakers',
      'Margin pressure from increased competition',
      'Heavy reliance on regulatory credits for past profitability',
      'Production quality inconsistencies'
    ],
    opportunities: [
      'Growing global EV market',
      'Autonomous driving technology monetization',
      'Energy storage business expansion',
      'AI and robotics applications',
      'New markets entry (semi trucks, energy generation)'
    ],
    threats: [
      'Intensifying competition from both EV startups and legacy automakers',
      'Potential regulatory challenges in key markets',
      'Supply chain vulnerabilities for critical materials',
      'Macroeconomic headwinds impacting consumer spending',
      'Technological disruption (e.g., solid-state batteries)'
    ]
  },
  recommendations: [
    { investorType: 'Growth Investors', recommendation: 'Hold/Selective Buy', positionSize: '3-5%' },
    { investorType: 'Value Investors', recommendation: 'Avoid', positionSize: '0%' },
    { investorType: 'Income Investors', recommendation: 'Avoid', positionSize: '0%' },
    { investorType: 'Speculative Investors', recommendation: 'Selective Buy/Trade', positionSize: '1-3%' },
    { investorType: 'ESG Investors', recommendation: 'Buy', positionSize: '3-5%' }
  ]
};

// Generate price history data (simulated)
export const generatePriceHistory = (timeRange) => {
  const multiplier = 
    timeRange === '1d' ? 24 : 
    timeRange === '1w' ? 7 : 
    timeRange === '1m' ? 30 : 
    timeRange === '6m' ? 180 : 
    timeRange === '1y' ? 365 : 
    timeRange === '5y' ? 60 : 30;
  
  const basePrice = 284.65;
  const data = [];
  
  for (let i = 0; i < multiplier; i++) {
    // Random price fluctuation
    const change = (Math.random() - 0.5) * 20;
    const price = basePrice + change;
    
    const date = new Date();
    date.setDate(date.getDate() - (multiplier - i));
    
    data.push({
      date: date.toLocaleDateString(),
      price: price.toFixed(2)
    });
  }
  
  return data;
}; 