import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/vans/Vans";
import VanDetail from "./components/pages/vans/VanDetail";
import Layout from "./components/organisms/Layout";

import Host from "./components/pages/host/HostLayout";
import Dashboard from "./components/pages/host/Dashboard";
import Income from "./components/pages/host/Income";
import Review from "./components/pages/host/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<Host />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
