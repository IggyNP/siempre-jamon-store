import Image from "next/image";
import React from "react";

const WhySection = () => {
  return (
    <div className="h-full lg:h-screen w-full flex flex-col justify-center items-center text-center px-3 py-20">
      <div>
        <h1>Calidad directa a tu casa</h1>
        <p className="mt-2">Te llevamos el mejor jamón a tu casa mes a mes</p>
      </div>
      <div className="flex flex-col lg:flex-row py-4">
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-4">
          <Image src="/images/corte-jamon.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-2">
            Cortado a mano y envasado al vacío
          </p>
          <p>Para que disfrutes al máximo sus cualidades.</p>
        </div>
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-4">
          <Image src="/images/jamon-cerca.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-2">De Jabugo a tu casa</p>
          <p>Gran origen, mejor destino.</p>
        </div>
        <div className="flex flex-col lg:px-6 justify-center items-center text-center mt-4">
          <Image src="/images/manos-movil.jpg" width="550" height="550" />
          <p className="font-bold text-lg mt-2">Somos flexibles</p>
          <p>Modifica o cancela tu plan cuando quieras.</p>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
