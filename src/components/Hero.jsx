import Image from "next/image";
import React from "react";

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
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded uppercase mt-6 md:w-[35%] md:text-md lg:text-lg">
          Descubre los planes
        </button>
      </div>
    </div>
  );
};

export default Hero;
