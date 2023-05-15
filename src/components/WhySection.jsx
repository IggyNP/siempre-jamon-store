import Image from "next/image";
import React from "react";
import PlanesBtn from "./PlanesBtn";

const WhySection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-3 py-20 text-center lg:h-screen">
      <div>
        <h1>Calidad directa a tu casa</h1>
        <p className="mt-2">Te llevamos el mejor jamón a tu casa mes a mes</p>
      </div>
      <div className="flex flex-col py-4 lg:flex-row">
        <div className="mt-8 flex flex-col items-center justify-center text-center lg:px-6">
          <Image src="/images/corte-jamon.jpg" width="550" height="550" />
          <p className="mt-4 text-lg font-bold">
            Cortado a mano y envasado al vacío
          </p>
          <p>Para que disfrutes al máximo sus cualidades.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-center lg:px-6">
          <Image src="/images/jamon-cerca.jpg" width="550" height="550" />
          <p className="mt-4 text-lg font-bold">De Jabugo a tu casa</p>
          <p>Gran origen, mejor destino.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-center lg:px-6">
          <Image src="/images/manos-movil.jpg" width="550" height="550" />
          <p className="mt-4 text-lg font-bold">Somos flexibles</p>
          <p>Modifica o cancela tu plan cuando quieras.</p>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center text-center lg:px-6">
        <h2>Empieza ya desde tan sólo 10€ por paquete</h2>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default WhySection;
