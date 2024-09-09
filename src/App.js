import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PsPage from './pages/PsPage';
import DepositsPsnPage from './pages/DepositsPsnPage';
import PsAccount from './pages/PsAccount';
import PsSet from './pages/PsSet';
import PsAccountMain from './pages/PsAccountMain';
import PremiumClub from './pages/PremiumClub';
import Stocks from './pages/Stocks';
import Ubisoft from './pages/Ubisoft';
import EaPlay from './pages/EaPlay';
import Blog from './pages/Blog';
import ArticlePage from './pages/ArticlePage';
import XboxPage from './pages/XboxPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ps" element={<PsPage />} />
        <Route path="/deposit-psn" element={<DepositsPsnPage />} />
        <Route path="/account-ps" element={<PsAccount />} />
        <Route path="/ps-set" element={<PsSet />} />
        <Route path="/account-ps-main" element={<PsAccountMain />} />
        <Route path="/premium-club" element={<PremiumClub />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/ubisoft" element={<Ubisoft />} />
        <Route path="/ea-play" element={<EaPlay />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-article" element={<ArticlePage />} />
        <Route path="/xbox" element={<XboxPage />} />


      </Routes>
    </Router>
  );
}

export default App;
