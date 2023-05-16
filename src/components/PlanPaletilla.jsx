import React from "react";

const PlanPaletilla = () => {
  return (
    <div className="relative mt-12 w-full px-4 md:px-8 lg:w-7/12 xl:w-1/2">
      <img
        src="images/bg-circles.png"
        className="absolute -ml-12 mt-24 w-full"
        alt="background circle images"
      />
      <div className="group relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white shadow">
        <div className="h-auto w-2.5 rounded-bl-md rounded-tl-md bg-[#DC2626] opacity-0 duration-100 ease-in-out group-hover:opacity-100"></div>
        <div className="w-full p-8">
          <div className="items-center justify-between md:flex">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              El Cauto
            </h2>
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              10€ / mes
            </p>
          </div>
          <p className="mt-4 text-gray-600 md:w-80">
            1 paquete de 150g. de paletilla ibérica todos los meses.
          </p>
        </div>
      </div>
      <div className="group relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white shadow">
        <div className="h-auto w-2.5 rounded-bl-md rounded-tl-md bg-[#DC2626] opacity-0 duration-100 ease-in-out group-hover:opacity-100"></div>
        <div className="w-full p-8">
          <div className="items-center justify-between md:flex">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              El Templado
            </h2>
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              18€ / mes
            </p>
          </div>
          <p className="mt-4 text-gray-600 md:w-80">
            2 paquetes de 150g. de paletilla ibérica todos los meses.
          </p>
        </div>
      </div>
      <div className="group relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white shadow">
        <div className="h-auto w-2.5 rounded-bl-md rounded-tl-md bg-[#DC2626] opacity-0 duration-100 ease-in-out group-hover:opacity-100"></div>
        <div className="w-full p-8">
          <div className="items-center justify-between md:flex">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              El Magnífico
            </h2>
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              35€ / mes
            </p>
          </div>
          <p className="mt-4 text-gray-600 md:w-80">
            4 paquetes de 150g. de paletilla ibérica todos los meses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanPaletilla;
