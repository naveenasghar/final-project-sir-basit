import React from 'react';
import Header from '../components/common/Header'
import Headings from '../components/common/Headings/heading'
import Shopping from '../components/Shopping/shopping';
import Head from '../components/Head/head';
import Main from '../components/common/Main/main';
import Models from '../components/common/Models/models'
import Footer from '../components/Footer/footer';

const Home = () => {
  return <div>
  <Header/>
  <Headings/>
  <Main/>
  <Head/>
  <Shopping/>
  <Models/>
  <Footer/>
 </div>;
};

export default Home;
