
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MockupCarousel from './components/MockupCarousel';
import Features from './components/Features';
import ImageGallery from './components/ImageGallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main>
        <Hero />
        <MockupCarousel />
        <Features />
        <ImageGallery />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
