import React from "react";
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import Vans, {loader as vansLoader} from "./components/pages/vans/Vans";
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

import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import AuthRequired from "./components/pages/AuthRequired";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="login" element={<Login />} />
    <Route 
      path="vans" 
      element={<Vans />} 
      loader={vansLoader} 
    />
    <Route path="vans/:id" element={<VanDetail />} />
    <Route path="host" element={<Host />} >
      <Route 
        index 
        element={<Dashboard />} 
        loader={async () => {
          return null
        }}
      />
      <Route 
        path="income" 
        element={<Income />} 
        loader={async () => {
          return null
        }}
      />
      <Route 
        path="review" 
        element={<Review />} 
        loader={async () => {
          return null
        }}
      />
      <Route 
        path="vans" 
        element={<HostVans />} 
        loader={async () => {
          return null
        }}
      />
      <Route 
        path="vans/:id" 
        element={<HostVanDetail />}
        loader={async () => {
          return null
        }}
      >
        <Route 
          index 
          element={<Detail />} 
          loader={async () => {
            return null
          }}
        />
        <Route 
          path="pricing" 
          element={<Pricing />} 
          loader={async () => {
            return null
          }}
        />
        <Route 
          path="photos" 
          element={<Photos />} 
          loader={async () => {
            return null
          }}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
