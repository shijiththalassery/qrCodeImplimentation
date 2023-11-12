import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certificate from './certicate';
import PdfDownloader from './Pdf';
import Medal from './Medal';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';


import Rec from './Rec';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/qrcode" element={<App />} />
          <Route path="/card" element={<Certificate />} />
          <Route path="/download" element={<PdfDownloader />} />
          <Route path="/rec" element={<Rec />} />
          <Route path="/medal" element={<Medal />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
