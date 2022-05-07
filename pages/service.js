import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import OurServicesHero from "../components/Hero/OurServicesHero";
import Footer from "../components/Footer/Footer";
import FooterLine from "../components/Footer/FooterLine";
import ServicePackage from "../components/Services/ServicePackage";
import ServicePackageTitle from "../components/Services/ServicePackageTitle";

const service = () => {
  const activeTab = "/service";
  const selectedValue = 2;
  const ServicePackages = [
    {
      day: "10 - 15",
      revisions: "2",
      pages: "5",
      service: "Domain + Hosting + Static Website",
      content: "Free Content Writing",
      support: "1",
      packageName: "STARTER PACKAGE",
    },
    {
      day: "10 - 15",
      revisions: "3",
      pages: "5",
      service: "Domain + Hosting + Static Website",
      content: "SEO Content Writing",
      support: "2",
      packageName: "BASIC PACKAGE",
    },
    {
      day: "15 - 20",
      revisions: "5",
      pages: "10",
      service: "Domain + Hosting + Dynamic Website",
      content: "SEO Content Writing",
      support: "4",
      packageName: "ADVANCED PACKAGE",
    },
    {
      day: "20 - 25",
      revisions: "7",
      pages: "10",
      service: "Domain + Hosting + Dynamic Website",
      content: "SEO Content Writing",
      support: "6",
      packageName: "PREMIUM PACKAGE",
    },
    {
      day: "25 - 30",
      revisions: "7",
      pages: "10",
      service: "Domain + Hosting + Dynamic Website",
      content: "SEO Content Writing",
      support: "6",
      packageName: "ENTERPRISE PACKAGE",
    },
  ];
  return (
    <>
      <Head>
        <title>RM Coderz | Services</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <OurServicesHero />
      <ServicePackageTitle />
      {ServicePackages.map((item, index) => (
        <ServicePackage item={item} index={index} key={index} />
      ))}
      <Footer />
      <FooterLine />
    </>
  );
};

export default service;
