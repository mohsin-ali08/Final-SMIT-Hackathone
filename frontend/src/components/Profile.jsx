import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Spin } from 'antd';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function BlogForm() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // Loading state for button
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);
        console.log('Logged in user:', user); // Check if logged-in user is available in localStorage
    }, []);

    const handleBlogSubmit = async (values) => {
        setLoading(true); // Set loading to true when form is submitted
        try {
            if (!loggedInUser) {
                // Handle the case when the user is not logged in
                handleError('User is not logged in.');
                return;
            }

            const url = "http://localhost:8080/api/blogs";
            const headers = {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            };

            // Add the logged-in user's username to the values as the author
            const blogData = {
                ...values,
                author: loggedInUser, // Ensure that the author is set
            };

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(blogData),
            });

            const result = await response.json();
            setLoading(false); // Set loading to false once the response is received

            if (result.success) {
                handleSuccess('Blog created successfully!');
                form.resetFields();
                navigate('/home');
            } else {
                handleError(result.message || 'Failed to create blog.');
            }
        } catch (err) {
            setLoading(false); // Set loading to false if an error occurs
            handleError('An error occurred while creating the blog.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow">
                <h1 className="text-2xl font-bold text-center mb-6">Create a Blog</h1>
                <div className="text-center mb-4">
                    <h2 className="text-xl font-semibold">Welcome, {loggedInUser}</h2>
                    <p className="text-gray-500">Write a new blog post below</p>
                </div>
                <Form form={form} layout="vertical" onFinish={handleBlogSubmit}>
                    <Form.Item
                        label="Blog Title"
                        name="title"
                        rules={[{ required: true, message: 'Please enter a blog title!' }]}
                    >
                        <Input placeholder="Enter blog title" />
                    </Form.Item>
                    <Form.Item
                        label="Content"
                        name="content"
                        rules={[{ required: true, message: 'Please enter blog content!' }]}
                    >
                        <Input.TextArea placeholder="Enter blog content" rows={6} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? <Spin size="small" /> : 'Submit'} {/* Show loading spinner when submitting */}
                        </Button>
                    </Form.Item>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default BlogForm;
