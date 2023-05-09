import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HowSection from "@/components/HowSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const info = () => {
  return (
    <>
      <Head>
        <title>Siempre Jamón | Info</title>
      </Head>
      <Navbar />
      <HowSection />
      <Faq />
      <Footer />
    </>
  );
};

export default info;
