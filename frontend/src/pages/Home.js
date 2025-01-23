// Blogs.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';

function Blogs() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchBlogs = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/blogs`;
            const headers = {
                Authorization: localStorage.getItem('token'),
            };
            const response = await fetch(url, { headers });
            const result = await response.json();
            setBlogs(result);
        } catch (err) {
            handleError('Failed to fetch blogs. Please try again later.');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <div className="p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Blogs</h1>
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className="border p-4 rounded-lg mb-4 shadow">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-600">{blog.content}</p>
                            <p className="text-sm text-gray-500 mt-2">Author: {blog.author}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No blogs available.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Blogs;
