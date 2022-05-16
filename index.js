import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import App from './App';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <div className="nav-bar"><Nav /></div>
        <div className="main-content"><App /></div>
        <Footer />
    </Router>
);


