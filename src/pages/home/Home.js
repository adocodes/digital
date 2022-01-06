import React from 'react';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
