import React from "react";
import Navbar from "./comppponents/Navbar";
import Hero from "./comppponents/Hero";
import Analytics from "./comppponents/Analytics";
import Newsletter from "./comppponents/Newsletter";
import Cards from "./comppponents/Cards";
import Footer from "./comppponents/Footer";

// import ScrollToTop from "./comppponents/ScrollTop";
function App() {
  return ( 
     <>
     <Navbar></Navbar>
     
      <Hero/>
      <Analytics/>
      <Newsletter />
      <Cards />
    <Footer />

     
    </>
  );
}

export default App;
