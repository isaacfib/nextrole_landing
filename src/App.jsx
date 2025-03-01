// nextrole_landing/src/App.jsx
import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { SocialProof } from "./sections/SocialProof";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <WhyChooseUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
