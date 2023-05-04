import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhySection from "@/components/WhySection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siempre Jamón</title>
      </Head>
      <Navbar />
      <Hero />
      <WhySection />
    </>
  );
}
