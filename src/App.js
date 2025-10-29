import React from 'react';
import AyodhyaBanner from './components/AyodhyaBanner';
import Navbar from './components/Navbar';
import EventsSection from './components/Sections/EventsSection';
import HomeSection from './components/HomeSection';
import GallerySection from './components/Sections/GallerySection';
import DonationSection from './components/Sections/DonationSection';
import DarshanTimingsSection from './components/Sections/DarshanTimingsSection';
import AyodhyaFooter from './components/AyodhyaFooter';
import './App.css';
import LiveDarshanSection from './components/Sections/LiveDarshanSection';

function App() {
  return (
    
      <div className="App">
        <AyodhyaBanner />
        <Navbar />
        <HomeSection />
        <DonationSection />
        <DarshanTimingsSection />
        <EventsSection />
        <GallerySection />
        {/* <LiveDarshanSection /> */}
        <AyodhyaFooter />
      </div>
  );
}

export default App;

