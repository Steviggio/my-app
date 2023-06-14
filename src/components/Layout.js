import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Banner from './Banner';
import Main from './Main'

function Layout () {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  )
}

export default Layout