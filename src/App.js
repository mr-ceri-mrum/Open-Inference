import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AiSolutions from './components/AiSolutions';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <AiSolutions />
        <About />
        <Testimonials />
        <Contact />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
