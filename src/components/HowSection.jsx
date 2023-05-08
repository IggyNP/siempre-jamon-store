import React from "react";
import Image from "next/image";
import PlanesBtn from "./PlanesBtn";

const HowSection = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center px-3 py-36">
      <div>
        <h1 className="mb-10">¿Cómo funciona?</h1>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex flex-col lg:px-6 lg:flex-row justify-between items-center text-center mt-8">
          <Image src="/images/corte-jamon.jpg" width="550" height="550" />
          <div className="flex flex-col px-10">
            <p className="font-bold text-lg mt-4">
              1. Elige el plan que más te guste
            </p>
            <p>Puedes escoger entre diferentes productos y cantidades.</p>
            <PlanesBtn />
          </div>
        </div>
        <div className="flex flex-col lg:px-6 lg:flex-row justify-between items-center text-center mt-8">
          <div className="flex flex-col px-10">
            <p className="font-bold text-lg mt-4">2. Preparamos tu pedido</p>
            <p>Y te lo enviamos el lunes más cercano.</p>
          </div>
          <Image src="/images/jamon-cerca.jpg" width="550" height="550" />
        </div>
        <div className="flex flex-col lg:px-6 lg:flex-row justify-between items-center text-center mt-8">
          <Image src="/images/manos-movil.jpg" width="550" height="550" />
          <div className="flex flex-col px-10">
            <p className="font-bold text-lg mt-4">
              3. Recíbelo en tu casa y disfruta
            </p>
            <p>Llegará entre 24-48 horas desde que se envía.</p>
          </div>
        </div>
        <div className="flex flex-col lg:px-6 lg:flex-row justify-between items-center text-center mt-8">
          <div className="flex flex-col px-10">
            <p className="font-bold text-lg mt-4">
              4. Espera con ganas el mes que viene
            </p>
            <p>Para recibir más jamón sin preocuparte por nada!</p>
          </div>
          <Image src="/images/manos-movil.jpg" width="550" height="550" />
        </div>
      </div>
      <div className="flex flex-col py-6 justify-center items-center text-center mt-20">
        <h2>Empieza ya desde tan sólo 10€ por paquete</h2>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default HowSection;
