// nextrole_landing/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { SocialProof } from "./sections/SocialProof";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <BrowserRouter> {/* Wrap with BrowserRouter */}
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes> {/* Use Routes instead of Switch */}
            {/* Homepage Route */}
            <Route path="/" element={  // Use Route and element prop
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

            {/* Catch-All Route for 404 Errors */}
            <Route path="*" element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you're looking for doesn't exist. <a href="/">Return home</a></p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter> {/* Close BrowserRouter */}
  );
}

export default App;