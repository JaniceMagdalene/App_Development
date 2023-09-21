import React from 'react';
import '../assets/css/Dashboard.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navbar';
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
  return (
    <>
      <Navigation />
      <div className="dashboard-container">
        <header className="header">
          <h1 className='mag'>Dashboard</h1>
          <button className="logout-button">Logout</button>
        </header>
        <main className="main-content">
          <div className="sidebar">
            <ul className="nav-menu">
              <li className="nav-item"><Link to="/Home">Home</Link></li>
              <li className="nav-item">Analytics</li>
              <li className="nav-item">Settings</li>
            </ul>
          </div>
          <div className="content">
            {/* Four Cool Cards */}
            <div className="cardj">
              <h2>WELCOME {user.username}</h2>
              <p> "Welcome to our Elderly Home, where every day is a new chapter filled with warmth and care."In our Elderly Home, we embrace the wisdom of age and the beauty of each new beginning.</p>
            </div>
            <div className='cardcontainer'>
            <div className="cardm">
              <h2>ELDERLY INDIVIDUAL</h2>
              <p>YOU ARE OUR EVERYTHING</p>
            </div>
            <div className="cardm">
              <h2>FAMILY</h2>
              <p>ALWAYS THERE WHEN YOU NEED US THE MOST</p>
            </div>
            <div className="cardm">
              <h2>CARE TAKER</h2>
              <p>WE ARE YOUR HELPING HAND</p>
            </div>

            {/* End of Cool Cards */}
          </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
