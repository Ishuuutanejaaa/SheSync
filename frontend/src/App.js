import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import Tracker from './Components/Tracker';
import AboutUs from './Components/AboutUs';
import PrivateRoute from './Components/PrivateRoute';
import HormonalImbalancePage from './Components/HormonalImbalancePage';
import UsageInstructions from './Components/UsageInstructions';
import ComparisonTables from './Components/ComparisonTables';
import Success from './Components/Success';
import Cancel from './Components/Cancel';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <Tracker />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route path="/hormonal-imbalance" element={<PrivateRoute><HormonalImbalancePage /></PrivateRoute>} />
        <Route path="/usage" element={<PrivateRoute><UsageInstructions /></PrivateRoute>} />
         <Route path="/comp" element={<PrivateRoute><ComparisonTables /></PrivateRoute>} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

      </Routes>
    </Router>
  );
};

export default App;



// hello
// hello hii