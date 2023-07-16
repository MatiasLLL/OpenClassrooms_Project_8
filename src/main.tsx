import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.tsx'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </Router>      
  </React.StrictMode>,
)


// import NavBar from './components/NavBar'
// import Header from './components/Header'
// import Footer from './components/Footer'
// <NavBar />
// <Header />
// <Footer />

