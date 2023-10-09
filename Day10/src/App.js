import React from 'react';
import LoginSignUp from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Filter from './pages/Diet';
import Ecohaven from './pages/Ecohaven';
import Physiotherapy from './pages/Mobilizing';
import ContactForm from './pages/Feedback';
import SanitationPage from './pages/Sanitation';
import FAQSection from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Policy';
import Social from './pages/Social';
import Form from './pages/Form';

function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginSignUp/>}/>
      <Route path='/Home' element={<Home/>}/>

      <Route path='/diet' element={<Filter/>}/>
      <Route path='/ecohaven' element={<Ecohaven/>}/>
      <Route path='/mobilizing' element={<Physiotherapy/>}/>
      <Route path='/feedback' element={<ContactForm/>}/>
      <Route path='/sanitation' element={<SanitationPage/>}/>
      <Route path='/faq' element={<FAQSection/>}/>
      <Route path='/terms-and-conditions' element={<Terms/>}/>
      <Route path='/privacy-policy' element={<Privacy/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
  </BrowserRouter>
  

  </>
  );
}

export default App;
