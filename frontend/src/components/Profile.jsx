// BlogForm.js
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function BlogForm() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [form] = Form.useForm();
    const navigate = useNavigate();


    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);


    const handleBlogSubmit = async (values) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/blogs`;
            const headers = {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            };
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(values),
            });
            const result = await response.json();

            if (result.success) {
                handleSuccess('Blog created successfully!');
                form.resetFields();
                navigate('/blogs');
            } else {
                handleError(result.message || 'Failed to create blog.');
            }
        } catch (err) {
            handleError('An error occurred while creating the blog.');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow">
                <h1 className="text-2xl font-bold text-center mb-6">Create a Blog</h1>
                <div className="p-8">
            <h1 className="text-2xl font-semibold mt-8">Welcome {loggedInUser}</h1>
            {/* You can add more profile-related content here */}
        </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleBlogSubmit}
                >
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
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default BlogForm;








