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
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Welcome to Nextrole!</h1>
    <p>If you see this, routing is working but content isn't loading.</p>
    <button onClick={() => window.location.reload()}>Refresh Page</button>
  </div>
} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
