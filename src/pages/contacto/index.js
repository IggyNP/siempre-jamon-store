import Head from "next/head";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const contacto = () => {
  return (
    <>
      <Head>
        <title>Siempre Jamón | Contacto</title>
      </Head>
      <Navbar />
      <Contact />
      <Footer showMailSub={false} />
    </>
  );
};

export default contacto;
