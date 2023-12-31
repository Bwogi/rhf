import React from "react";

import Header from "../partials/Header";
import Hero from "../partials/Hero";
import Inspiration from "../partials/Inspiration";
import Carousel from "../partials/Carousel";
import Creatives from "../partials/Creatives";
// import Pricing from '../partials/Pricing';
// import Testimonials from '../partials/Testimonials';
import Faqs from "../partials/Faqs";
import Blog from "../partials/Blog";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";
import NewHere from "./NewHere";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import SearchByDate from "./SearchByDate";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        {/* <SearchByDate /> */}
        <div id="about">
          {" "}
          <About />{" "}
        </div>
        {/* <div id="services">
          <Services />
        </div> */}
        {/* <div id="newhere">
          <NewHere />
        </div> */}
        {/* <div id='ministries'><Inspiration /></div> */}

        {/* <Carousel /> */}
        {/* <Creatives /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
        <div id="blog">
          <Blog />
        </div>
        <Cta />
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
