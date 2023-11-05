import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certificate from './certicate';
import PdfDownloader from './Pdf';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/card" element={<Certificate />} />
          <Route path="/download" element={<PdfDownloader />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
