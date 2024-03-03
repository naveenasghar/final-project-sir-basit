import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
// import Header from './components/common/Header';
// import Headings from './components/common/Headings/heading';
// import Main from './components/common/Main/main';
// import Head from './components/Head/head';
import Potlis from './pages/potlis';
// import Shopping from './components/Shopping/shopping';
// import Models from './components/common/Models/models';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Juttis from './pages/juttis';





import './App.css';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <>
      <Navbar />
     

      <Routes>
      <Route path='/home' element={<Home />} />
        <Route path='/potlis' element={<Potlis />} />
        <Route path='/about' element={<About />} />
        <Route path='/juttis' element={<Juttis/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>   
   
      {/* {/* <Headings /> */}
    
      {/* <Main />
      <Head /> 
      <Shopping />
       <Models />  */}
     
     
      </>

  );
}

export default App;

     

     
      

