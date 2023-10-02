import React from 'react';

import InfoSection from './Info.js';
import AboutSection from './About.js';
import Footer from './Footer.js';
const Card = () => {
  return (
    <div className="card">
      <InfoSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Card;
