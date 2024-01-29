import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Industry from "../pages/Industry";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TopUp from "../components/Reusable/Top";
// import Resources from "../pages/re";
// import Fhirbase from "../pages/Fhirbase";

import Service1 from "../Service/ser1";
import Service2 from "../Service/ser2";
import Service3 from "../Service/ser3";
import Service4 from "../Service/ser4";
import Service5 from "../Service/ser5";
import Service6 from "../Service/ser6";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Res1 from "../Service/res1";
import Res2 from "../Service/res2";
import Res3 from "../Service/res3";
import Register from "../pages/Register";
import LoginForm from "../components/LoginForm";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <TopUp />
      <div className="mainsa">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Contact" element={<Contact />} />
          <Route index path="/About" element={<About />} />
          <Route index path="/industry" element={<Industry />} />
          <Route index path="/Services" element={<Services />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/login" element={<LoginForm />} />
          <Route index path="/Firebase" element={<Service1 />} />
          <Route index path="/FHIRAnalytics" element={<Service1 />} />
          <Route index path="/DataMigrationServices" element={<Service2 />} />
          <Route index path="/ManageServices" element={<Service3 />} />
          <Route index path="/TechnicalConsulting" element={<Service4 />} />
          <Route index path="/ClinicalIntegration" element={<Service5 />} />
          <Route index path="/FHIRHealthExchange" element={<Service6 />} />
          <Route index path="/Patient%20Access" element={<Res1 />} />
          <Route index path="/Policies%20and" element={<Res2 />} />
          <Route index path="/Payer-to-Payer" element={<Res3 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
