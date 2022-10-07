import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
 
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
      <AppRouter></AppRouter>
    </Router>
 
)

 