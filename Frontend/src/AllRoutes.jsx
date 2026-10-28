import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponents from "./components/pages/home/HomeComponents";
import AboutComponents from "./components/pages/about/AboutComponents";
import PortfolioComponents from "./components/pages/portfolio/PortfolioComponents";
import ContactComponents from "./components/pages/contact/ContactComponents";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/portfolio" element={<PortfolioComponents />} />
        <Route path="/contact" element={<ContactComponents />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
