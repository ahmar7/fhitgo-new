import "./assets/css/style.css";
import React, { useEffect } from "react";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Industry from "./pages/Industry";
import Service1 from "./Service/ser1";
import Service2 from "./Service/ser2";
import Service3 from "./Service/ser3";
import Service4 from "./Service/ser4";
import Service5 from "./Service/ser5";
import Service6 from "./Service/ser6";
import Res1 from "./Service/res1";
import Res2 from "./Service/res2";
import Res3 from "./Service/res3";
import Firebase from "./Service/Firebase";
import Router from "./config/Router";

function App() {
  // useEffect(() => {
  //   document.title =
  //     "FHIRGO | HL7 FHIR Standards | Healthcare Digital Technology";
  // }, []);
  // const currentRoute = window.location.pathname;
  return (
    <>
      <div>
        {/* <Navbar />
        <div className="pt-16"></div>
        {currentRoute === "/" && <Home />}
        {currentRoute === "/Contact" && <Contact />}
        {currentRoute === "/About" && <About />}
        {currentRoute === "/industry" && <Industry />}
        {currentRoute === "/Services" && <Services />}
        {currentRoute === "/Firebase" && <Firebase />}
        <div className="px-4">
          {currentRoute === "/FHIRAnalytics" && <Service1 />}
          {currentRoute === "/DataMigrationServices" && <Service2 />}
          {currentRoute === "/ManageServices" && <Service3 />}
          {currentRoute === "/TechnicalConsulting" && <Service4 />}
          {currentRoute === "/ClinicalIntegration" && <Service5 />}
          {currentRoute === "/FHIRHealthExchange" && <Service6 />}
          {currentRoute === "/Patient%20Access" && <Res1 />}
          {currentRoute === "/Policies%20and" && <Res2 />}
          {currentRoute === "/Payer-to-Payer" && <Res3 />}
        </div>
        <Footer /> */}
        <Router />
      </div>{" "}
    </>
  );
}

export default App;
