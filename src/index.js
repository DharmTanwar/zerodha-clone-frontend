import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLoader from "./Landing_page/AppLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing_page/home/HomePage";
import Signup from "./Landing_page/signup/Signup";
import About from "./Landing_page/about/AboutPage";
import Product from "./Landing_page/product/ProductPage";
import Pricing from "./Landing_page/pricing/PricingPage";
import Support from "./Landing_page/support/SupportPage";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import Login from "./Landing_page/login/Login";
import NotFound from "./Landing_page/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AppLoader/>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
