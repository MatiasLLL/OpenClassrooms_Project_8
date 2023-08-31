import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.tsx'
import LegalNotice from './components/LegalNotice'
import PrivacyPolicy from './components/PrivacyPolicy'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </Router>      
  </React.StrictMode>,
)

