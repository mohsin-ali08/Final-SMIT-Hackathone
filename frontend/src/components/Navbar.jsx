// Navbar.js
import React from 'react';
import { Button } from 'antd'; // Import Button from Ant Design
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar({ handleLogout }) {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-700 px-5 py-3 flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-white text-md font-bold">
                <Link to="/">MOHSIN</Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
                <Link to="/Profile" className="text-white hover:text-gray-200 text-md">
                    Profile
                </Link>
                <Link to="/Admin" className="text-white hover:text-gray-200 text-md">
                    Admin
                </Link>

                {/* Logout Button using Ant Design */}
                <Button
                    onClick={handleLogout}
                    type="none"
                    danger
                    className="rounded-md bg-red-600 hover:bg-red-500 text-white hover:text-white"
                >
                    Logout
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
