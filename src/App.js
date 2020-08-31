import React from "react";
import "./App.css";
import "./css/Banner.css";
import "./css/Nav.css";
import "./css/HeroInfo.css";
import "./css/Recent.css";
import "./css/About.css";
import "./css/Footer.css";
// components
import Hero from "./components/Hero";
import HeroInfo from "./components/HeroInfo";
import RecentHomes from "./components/RecentHomes";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <HeroInfo />
      <RecentHomes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
