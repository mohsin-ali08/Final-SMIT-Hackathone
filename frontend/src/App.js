import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile';
import './App.css';
import LoanCalculator from './components/LoanCalculator';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/loan-calculator' element={<LoanCalculator />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/AdminDashboard"
          element={
            isAuthenticated ? <Admin /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
