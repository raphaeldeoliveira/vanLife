import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import Vans from "./components/pages/vans/Vans";
import VanDetail from "./components/pages/vans/VanDetail";
import Layout from "./components/organisms/Layout";

import Host from "./components/pages/host/HostLayout";
import Dashboard from "./components/pages/host/Dashboard";
import Income from "./components/pages/host/Income";
import Review from "./components/pages/host/Review";
import HostVans from "./components/pages/host/vans/HostVans";
import HostVanDetail from "./components/pages/host/vans/HostVanLayout";

import Detail from "./components/pages/host/vans/Detail";
import Pricing from "./components/pages/host/vans/Pricing";
import Photos from "./components/pages/host/vans/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<Host />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Detail />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
