import React from "react";
import Navbar from "../../Components/Navbars/Navbar";
import PropertyCard from "../../Pages/Home/Homepage";
import Header2 from "../../Components/Navbars/Header2";
import Header3 from "../../Components/Navbars/Header3";
import Footer1 from "../../Components/Footers/Footer1";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Header3 />
        <Header2 />
        <PropertyCard />
        <Footer1/>
      </div>
    </div>
  );
}

export default Home;
