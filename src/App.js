import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import Dashboard from './pages/Dashboard';
import FinancialData from './pages/FinancialData';
import MarketSentiment from './pages/MarketSentiment';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import CompetitorComparison from './pages/CompetitorComparison';
import IntrinsicValue from './pages/IntrinsicValue';
import InvestmentThesis from './pages/InvestmentThesis';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/financial-data" element={<FinancialData />} />
              <Route path="/market-sentiment" element={<MarketSentiment />} />
              <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
              <Route path="/competitor-comparison" element={<CompetitorComparison />} />
              <Route path="/intrinsic-value" element={<IntrinsicValue />} />
              <Route path="/investment-thesis" element={<InvestmentThesis />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
