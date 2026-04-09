// import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Showcase from './Showcase';
import Contact from './Contact';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import ImplantStructure from './Implant';
import TeamGallery from './TeamGallery';
import Faq from './Faq';

export default function App() {
  return (
    <div className="bg-background-light text-slate-800 font-sans antialiased w-full min-h-screen overflow-x-clip">
      <Nav />
      <main className="w-full">
        <Hero />
        <About />
        <ImplantStructure />
        <Services />
        <TeamGallery />
        <Showcase />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CookieBanner></CookieBanner>
    </div>
  );
}