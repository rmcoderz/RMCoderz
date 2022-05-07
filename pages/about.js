import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterLine from "../components/Footer/FooterLine";
import AboutHero from "../components/Hero/AboutHero";
import AboutDetails from "../components/About/AboutDetails";
import AboutCard from "../components/About/AboutCard";
import AboutInfo from "../components/About/AboutInfo";

const about = () => {
  const activeTab = "/about";
  const selectedValue = 1;
  return (
    <>
      <Head>
        <title>RM Coderz | AboutUs</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <AboutHero />
      <AboutDetails />
      <AboutCard />
      <AboutInfo />
      <Footer />
      <FooterLine />
    </>
  );
};

export default about;
