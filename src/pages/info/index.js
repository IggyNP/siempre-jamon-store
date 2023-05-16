import Head from "next/head";
import Navbar from "@/components/Navbar";
import HowSection from "@/components/HowSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

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
