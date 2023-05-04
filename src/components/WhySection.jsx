import Image from "next/image";
import React from "react";
import PlanesBtn from "./PlanesBtn";

const WhySection = () => {
  return (
    <div className="h-full lg:h-screen w-full flex flex-col justify-center items-center text-center px-3 py-20">
      <div>
        <h1>Calidad directa a tu casa</h1>
        <p className="mt-2">Te llevamos el mejor jamón a tu casa mes a mes</p>
      </div>
      <div className="flex flex-col lg:flex-row py-4">
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-8">
          <Image src="/images/corte-jamon.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-4">
            Cortado a mano y envasado al vacío
          </p>
          <p>Para que disfrutes al máximo sus cualidades.</p>
        </div>
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-8">
          <Image src="/images/jamon-cerca.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-4">De Jabugo a tu casa</p>
          <p>Gran origen, mejor destino.</p>
        </div>
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-8">
          <Image src="/images/manos-movil.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-4">Somos flexibles</p>
          <p>Modifica o cancela tu plan cuando quieras.</p>
        </div>
      </div>
      <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-14">
        <h2>Empieza ya desde tan sólo 10€ por paquete</h2>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default WhySection;
