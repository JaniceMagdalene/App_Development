import React from 'react';
import LoginSignUp from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Navbar/>}> */}
      <Route path='/Login' element={<LoginSignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
     
      {/* </Route>  */}
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
