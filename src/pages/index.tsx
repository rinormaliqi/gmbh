'use client';

import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import ContactInfo from '../components/ContactInfo';
import Features from '../components/Features';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import ContactForm from '../components/kontakt';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import StatisticsCounter from '../components/StatisticsCounter';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div id="home" className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <>
          <div id="features">
            <Features />
          </div>
          <Canvas />
          <ImageGrid />
          <StatisticsCounter />
          <Canvas />
          <div id="#kontakt">
            <ContactInfo />
            <ContactForm />
          </div>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <div id="about">
            <About />
          </div>
        </>
      </LazyShow>
    </div>
  );
};

export default App;
