import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (values) => {
    const { email, password } = values;
    if (!email || !password) {
      return handleError('Email and password are required');
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => navigate('/home'), 1000);
      } else if (error) {
        handleError(error?.details[0]?.message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <Form
          layout="vertical"
          onFinish={handleLogin}
          className="mt-6"
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
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
            Login
          </Button>
        </Form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
          </span>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
