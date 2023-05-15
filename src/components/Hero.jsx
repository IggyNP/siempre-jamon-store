import Image from "next/image";
import React from "react";
import PlanesBtn from "./PlanesBtn";

const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center px-7 py-36 text-center md:items-stretch md:justify-center">
      <Image
        src="/images/jamon-fondo.jpg"
        alt="fondo-jamon"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div className="flex w-[45%] flex-col items-center">
        <h1>No hay celebración sin Jamón</h1>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default Hero;
