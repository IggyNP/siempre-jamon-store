import Head from "next/head";
import Navbar from "@/components/Navbar";
import Planes from "@/components/Planes";
import Footer from "@/components/Footer";

export default function planes() {
  return (
    <>
      <Head>
        <title>Siempre Jamón | Planes</title>
      </Head>
      <Navbar />
      <Planes />
      <Footer showMailSub={false} />
    </>
  );
}
