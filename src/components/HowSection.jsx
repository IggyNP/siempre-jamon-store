import React from "react";
import Image from "next/image";
import PlanesBtn from "./PlanesBtn";

const HowSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-3 py-36 text-center">
      <div>
        <h1 className="mb-10">¿Cómo funciona?</h1>
      </div>
      <div className="flex flex-col py-4">
        <div className="mt-8 flex flex-col items-center justify-between text-center lg:flex-row lg:px-6">
          <Image src="/images/ordering.jpg" width="550" height="550" />
          <div className="flex flex-col px-10">
            <p className="mt-4 text-lg font-bold">
              1. Elige el plan que más te guste
            </p>
            <p>Puedes escoger entre diferentes productos y cantidades.</p>
            <PlanesBtn />
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between text-center lg:flex-row lg:px-6">
          <div className="flex flex-col px-10">
            <p className="mt-4 text-lg font-bold">2. Preparamos tu pedido</p>
            <p>Y te lo enviamos el lunes más cercano.</p>
          </div>
          <Image src="/images/delivery.jpg" width="550" height="550" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-between text-center lg:flex-row lg:px-6">
          <Image src="/images/jamon-focus.jpg" width="550" height="550" />
          <div className="flex flex-col px-10">
            <p className="mt-4 text-lg font-bold">
              3. Recíbelo en tu casa y disfruta
            </p>
            <p>Llegará entre 24-48 horas desde que se envía.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between text-center lg:flex-row lg:px-6">
          <div className="flex flex-col px-10">
            <p className="mt-4 text-lg font-bold">
              4. Espera con ganas el mes que viene
            </p>
            <p>Para recibir más jamón ¡Sin preocuparte por nada!</p>
          </div>
          <Image src="/images/waiting.jpg" width="550" height="550" />
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center py-6 text-center">
        <h2>Empieza ya desde tan sólo 10€ por paquete</h2>
        <PlanesBtn />
      </div>
    </div>
  );
};

export default HowSection;
