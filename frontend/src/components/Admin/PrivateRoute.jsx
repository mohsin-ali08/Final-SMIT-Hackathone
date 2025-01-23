import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // If there is no token or user is not an admin, redirect to login page
    if (!token || role !== 'admin') {
        return <Navigate to="/login" />;
    }

    // If role is admin, render the component
    return element;
}

export default PrivateRoute;
