import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">
          My App
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
