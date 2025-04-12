import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import Tracker from './Components/Tracker';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/tracker" element={<Tracker />} />

      </Routes>
    </Router>
  );
};

export default App;
