// nextrole_landing/src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import SocialProof from "./sections/SocialProof";
import WhyChooseUs from "./sections/WhyChooseUs";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <SocialProof />
              <WhyChooseUs />
              <FAQ />
              <CTA />
            </>
          } />

          {/* Supporting Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
