import Image from "next/image";
import React from "react";
import PlanesBtn from "./PlanesBtn";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-screen md:justify-center items-center md:items-stretch text-center py-40 px-7">
      <Image
        src="/images/jamon-fondo.jpg"
        alt="fondo-jamon"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div className="flex flex-col items-center w-[45%]">
        <h1>No hay celebración sin Jamón</h1>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default Hero;
