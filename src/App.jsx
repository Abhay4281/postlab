import './App.css';
import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

// Shared components
import AnnouncementBar from './components/announcementBar';
import FloatingNav from './components/FloatingNav';
import FloatingGrid from './components/FloatingGird';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded components for /about (performacne optimisation)
const HeroGlow = React.lazy(() => import('./components/About/HeroGlow'));
const HeroSection = React.lazy(() => import('./components/About/HeroSection'));
const AboutSection = React.lazy(() => import('./components/About/AboutSection'));
const CardSection = React.lazy(() => import('./components/About/AboutSection'));
const About = React.lazy(() => import('./components/About/About'));
const ScrollVideo = React.lazy(() => import('./components/About/ScrollVideo'));
const BuildingSection = React.lazy(() => import('./components/About/BuildingSection'));
const GridSection = React.lazy(() => import('./components/About/GridSection'));
const InvestorSection = React.lazy(() => import('./components/About/Investors'));
const Builder = React.lazy(() => import('./components/About/Builder'));

// Lazy-loaded components for /contact
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const ContactUs = React.lazy(() => import('./components/Contact/ContactUs'));

// Simple loader component
const Loader = () => (
  <div className="loader" style={{
    position: 'fixed',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f8f8f2",
    zIndex: 9999,
    fontSize: '2rem'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.4,
          smoothWheel: true,
          smoothTouch: false,
          touchMultiplier: 1.2,
        }}
      >
        <Routes>
          <Route path='/about' element={
            <Suspense fallback={<Loader />}>
              <AnnouncementBar />
              <div className="wrapper" style={{
                zIndex: 1,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: "#f8f8f2",
                minHeight: "100vh"
              }}>
                <FloatingGrid />
                <HeroGlow />
                <Header />
                <HeroSection />
              </div>
              <CardSection />
              <div>
                <About />
                <FloatingGrid />
              </div>
              <BuildingSection />
              <GridSection />
              {/* <ScrollVideo /> */}
              <InvestorSection />
              <Builder />
              <Footer />
            </Suspense>
          } />

          <Route path="/contact" element={
            <Suspense fallback={<Loader />}>
              <AnnouncementBar />
              <div className="wrapper" style={{
                zIndex: 1,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: "#f8f8f2",
                minHeight: "100vh"
              }}>
                <FloatingGrid />
                <Header />
                <Contact />
                <ContactUs />
                <Footer />
              </div>
            </Suspense>
          } />

          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
        <FloatingNav />
      </ReactLenis>
    </Router>
  );
}

export default App;
