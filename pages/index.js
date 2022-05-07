import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TopTechnology from "../components/Modals/TopTechnology";
import Services from "../components/Modals/Services";
import DetailServices from "../components/Modals/DetailServices";
import Footer from "../components/Footer/Footer";
import FooterLine from "../components/Footer/FooterLine";
export default function Home() {
  const activeTab = "/";
  const selectedValue = 0;
  return (
    <>
      <Head>
        <title>RM Coderz</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <Hero />
      <TopTechnology />
      <Services />
      <DetailServices />
      <Footer />
      <FooterLine />
    </>
  );
}
