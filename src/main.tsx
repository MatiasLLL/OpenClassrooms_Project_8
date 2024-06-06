import React from 'react'; // , { lazy, Suspense }
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

// const LegalNotice = lazy(() => import('./pages/LegalNotice'));
// const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

import './index.css';
import './i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/legalnotice" element={<LegalNotice />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                {/* <Route
                    path="/legalnotice"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <LegalNotice />
                        </Suspense>
                    }
                />
                <Route
                    path="/privacypolicy"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <PrivacyPolicy />
                        </Suspense>
                    }
                /> */}
                {/* <Route path="*" element={<Home />} /> */}
            </Routes>
        </Router>
    </React.StrictMode>
);
