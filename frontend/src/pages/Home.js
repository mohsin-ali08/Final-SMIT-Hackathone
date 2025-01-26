import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [blogs, setBlogs] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
        fetchBlogs();
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
            // const url = `${process.env.REACT_APP_API_URL}api/blogs`;
            const url = `${process.env.REACT_APP_API_URL}api/blogs`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            setBlogs(result);
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <h1 className="text-2xl font-semibold mt-8">Welcome {loggedInUser}</h1>
            <div>
                {blogs && blogs.length > 0 ? (
                    blogs.map((item, index) => (
                        <ul key={index}>
                            <span>{item.title} : {item.content}</span>
                        </ul>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
