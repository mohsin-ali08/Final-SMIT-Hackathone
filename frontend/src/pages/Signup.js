import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignup = async (values) => {
    const { name, email, password } = values;
    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
        <Form
          layout="vertical"
          onFinish={handleSignup}
          className="mt-6"
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
        >
          {/* Name Field */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Enter your name"
              className="rounded-lg"
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Enter your email"
              className="rounded-lg"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Enter your password"
              className="rounded-lg"
            />
          </Form.Item>

          {/* Submit Button */}
          <Button
            type="primary"
            htmlType="submit"
            className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Signup
          </Button>
        </Form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
