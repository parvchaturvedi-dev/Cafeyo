import React from 'react';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import MenuSection from '../components/MenuSection';
import SpecialsSection from '../components/SpecialsSection';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <MenuSection />
      <Menu />
      <SpecialsSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
