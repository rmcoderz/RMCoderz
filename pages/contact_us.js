import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import FooterLine from "../components/Footer/FooterLine";
import ContactHero from "../components/Hero/ContactHero";

const contact_us = () => {
  const activeTab = "/contact_us";
  const selectedValue = 4;
  return (
    <>
      <Head>
        <title>RM Coderz | Contact Us</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <ContactHero />
      <ContactUs />
      <Footer />
      <FooterLine />
    </>
  );
};

export default contact_us;
