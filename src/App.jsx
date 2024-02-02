// import { useState } from 'react'
import "./App.css";
import Destinations from "./components/DestinationsSection/Destinations";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OffersSection from "./components/OffersSection/OffersSection";
import SliderSection from "./components/SliderSection/SliderSection";

function App() {
  return (
    <main className="flex  flex-col text-center">
      <Navbar />
      <section className="" id="sliderSection">
        <SliderSection />
      </section>
      <section id="destinationSection" className="my-8">
        <Destinations />
      </section>
      <section id="experienceSection" className="my-8">
        <ExperienceSection />
      </section>
      <section id="offersSection" className="my-8">
        <OffersSection />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}

export default App;
