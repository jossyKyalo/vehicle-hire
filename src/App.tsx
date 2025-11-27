import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { VehicleListings } from './components/VehicleListings';
import { VehicleDetail } from './components/VehicleDetail';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { HowItWorks } from './components/HowItWorks';
import { SellerDashboard } from './components/SellerDashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);

  const handleLogin = (type: 'buyer' | 'seller') => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isAuthenticated={isAuthenticated} 
          userType={userType}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles" element={<VehicleListings />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/" /> : 
              <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/register" 
            element={
              isAuthenticated ? 
              <Navigate to="/" /> : 
              <RegisterPage onRegister={handleLogin} />
            } 
          />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route 
            path="/seller/dashboard" 
            element={
              isAuthenticated && userType === 'seller' ? 
              <SellerDashboard /> : 
              <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}
