import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    if (response.token) {
      localStorage.setItem('token', response.token);
      setMessage('Login successful!');
      if (onLogin) onLogin();
    } else {
      setMessage(response.message || 'Login failed.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="login-input"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={toggleShowPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="social-login">
          <p>Or login with:</p>
          <button className="social-btn google" aria-label="Login with Google">Google</button>
          <button className="social-btn twitter" aria-label="Login with Twitter">Twitter</button>
          <button className="social-btn facebook" aria-label="Login with Facebook">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
