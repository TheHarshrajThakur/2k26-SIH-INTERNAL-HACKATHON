import React from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Guidelines } from "./components/Guidelines";
import { RegistrationForm } from "./components/RegistrationForm";
import { Timeline } from "./components/Timeline";
import { SPOCDesk } from "./components/SPOCDesk";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col scroll-smooth">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Guidelines />
        <Timeline />
        <RegistrationForm />
        <SPOCDesk />
      </main>
      <Footer />
    </div>
  );
}

export default App;
