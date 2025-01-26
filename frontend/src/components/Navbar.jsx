import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
      setIsAuthenticated(true); // If token exists, user is authenticated
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsAuthenticated(false); // Update state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">
          SAYLANI Microfinance Bank
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <Link to="/AdminDashboard" className="hover:text-gray-300">
              Admin Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
