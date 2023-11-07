import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request data
    const requestData = {
      username: username,
      password: password,
    };

    // Reset the error message
    setError('');

    // Make an API request to the login endpoint
    try {
      const response = await fetch('http://3.229.95.193:8080/login/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);

        if (data.authenticated && data.role === '3') {
          // Save the user's authentication information in a cookie
          Cookies.set('userToken', data.token);
          navigate('/admin_dashboard', { state: { role: data.role } });
        } else {
          // Handle other cases or show an error message
          setError('Invalid username or password.');
        }
      } else {
        // Handle the case where the API request is not successful
        setError('Failed to authenticate. Please try again.');
      }
    } catch (error) {
      console.error('API request error:', error);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className='form_container shadow p-5 mb-5 rounded bg-white' style={{ width: '500px' }}>
      <h1 className='text-center mb-4'>FOT Hostel Assets Management System</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2 p-1'>
            <label htmlFor='username' className='mb-2'>Username</label>
            <input
              type='text'
              placeholder='Enter Username'
              className='form-control'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-2 p-1'>
            <label htmlFor='password' className='mb-2'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-danger mb-2">{error}</div>}
          <div className="d-grid">
            <button type='submit' className="btn btn-outline-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Create an AdminDashboard component for the protected route
export function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of the userToken cookie
    const userToken = Cookies.get('userToken');

    if (!userToken) {
      // If the token is not present, navigate to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/">Back to Login</Link>
    </div>
  );
}
