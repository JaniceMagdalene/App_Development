import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';

const LoginSignUp = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Replace this with your authentication logic or redirect logic.
    // For example, you can use localStorage or sessionStorage to simulate authentication.
    // Here, I'm assuming successful login by just navigating to '/home'.
    navigate('/home');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Replace this with your registration logic or redirect logic.
    // For example, you can use localStorage or sessionStorage to simulate registration.
    // Here, I'm assuming successful registration by just navigating to '/home'.
    navigate('/home');
  };

  return (
    <>
      <div className="container">
        <div className="container1">
          <input id="register_toggle" type="checkbox" />
          <div className="slider">
            <form className="form" onSubmit={handleLoginSubmit}>
              <span className="title">Login</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>
              <button type="submit">Login</button>

              <span className="bottom_text">
                Don't have an account?{' '}
                <label className="switch" htmlFor="register_toggle">
                  Sign Up
                </label>{' '}
              </span>
            </form>
            <form className="form" onSubmit={handleSignupSubmit}>
              <span className="title">Sign Up</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </div>

              <button type="submit">Sign Up</button>

              <span className="bottom_text">
                Already have an account?{' '}
                <label className="switch" htmlFor="register_toggle">
                  Log In
                </label>{' '}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;