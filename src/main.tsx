import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.tsx'

const LegalNotice = lazy(() => import ('./components/LegalNotice'))
const PrivacyPolicy = lazy(() => import ('./components/PrivacyPolicy'))

import './index.css'
import './i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/legalnotice" element={<Suspense fallback={<div>Loading...</div>}><LegalNotice /></Suspense>} />
        <Route path="/privacypolicy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </Router>      
  </React.StrictMode>,
)

