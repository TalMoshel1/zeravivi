import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App.jsx';
import SinglePhoto from './components/SinglePhoto.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/photos/:id" element={<SinglePhoto />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
