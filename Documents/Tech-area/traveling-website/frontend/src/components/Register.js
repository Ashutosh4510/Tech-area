import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData);
    if (response.message === 'User registered successfully') {
      setMessage('Registration successful! You can now log in.');
    } else {
      setMessage(response.message || 'Registration failed.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="register-input"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="register-input"
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
              className="register-input"
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
          <div className="input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="register-input"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={toggleShowConfirmPassword}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        <div className="social-login">
          <p>Or sign up with:</p>
          <button className="social-btn google" aria-label="Sign up with Google">Google</button>
          <button className="social-btn twitter" aria-label="Sign up with Twitter">Twitter</button>
          <button className="social-btn facebook" aria-label="Sign up with Facebook">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
