import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navbar';

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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    
    // const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

  
    const { password } = loginData;
  
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
  

    if (password === hardcodedPassword) {
        
        toast.success('Login successful!', { position: 'top-center' });
        navigate('/Home');
      } else {
       
        toast.error('Login failed. Please check your credentials and try again.', { position: 'top-center' });
      }
    };
  
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
      
        
        const { username, email, password } = signupData;
      
        
        if (!username || !email || !password) {
          toast.error('Please fill in all fields.', { position: 'top-center' });
          return;
        }
      
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error('Invalid email address. Please enter a valid email.', { position: 'top-center' });
          return;
        }
      
        
        if (password.length < 6) {
          toast.error('Password must be at least 6 characters long.', { position: 'top-center' });
          return;
        }
      
      
        await new Promise((resolve) => setTimeout(resolve, 1000));
      
        
        const registrationSuccess = Math.random() < 0.5; 
      
        if (registrationSuccess) {
          toast.success('Registration successful!', { position: 'top-center' });
          navigate('/Home');
        } else {
          toast.error('Registration failed. Please try again.', { position: 'top-center' });
        }
      };
      
  
  return (
    <>
    {/* <div className="wrapper"> */}
     <Navigation /> 
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
      <ToastContainer />
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
    </>
  );
};

export default LoginSignUp;