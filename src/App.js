import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
