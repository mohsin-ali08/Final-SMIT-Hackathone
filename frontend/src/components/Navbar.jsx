// Navbar.js
import React from 'react';
import { Button } from 'antd'; // Import Button from Ant Design
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar({ handleLogout }) {
    const navigate = useNavigate();

    return (
        <nav className="bg-blue-600 p-4 flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-white text-lg font-bold">
                <Link to="/">Home</Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/Profile" className="text-white hover:text-gray-200 text-lg">
                    Profile
                </Link>
                <Link to="/Admin" className="text-white hover:text-gray-200 text-lg">
                    Admin
                </Link>

                {/* Logout Button using Ant Design */}
                <Button
                    onClick={handleLogout}
                    type="primary"
                    danger
                    className="rounded-md"
                >
                    Logout
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
