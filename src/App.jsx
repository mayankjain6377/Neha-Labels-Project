import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Services from "./components/StickerCatalog.jsx";
import About from "./components/About.jsx";
import Contact from "./components/ContactPage.jsx";
import banner from "./assets/banner.png";
import Labels from "./components/Labels.jsx";
import CardTags from "./components/CardTags.jsx";
import Stickers from "./components/Stickers.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="background-banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view/stickers" element={<Stickers />} />
          <Route path="/view/labels" element={<Labels />} />
          <Route path="/view/card-tags" element={<CardTags />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
