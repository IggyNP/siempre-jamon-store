import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Planes = () => {
  return (
    <>
      <Navbar />
      <div className="lg:flex lg:h-screen items-center justify-between py-36">
        <div className="lg:w-1/2 w-full text-center px-4">
          <h1 className="">Elige tu plan maestro</h1>
          <p className="mt-6">
            Escoge entre jamón o paletilla y la cantidad de paquetes que quieres
            recibir al mes.
          </p>
          <div className="flex flex-row items-center justify-center">
            <button
              onclick="toggleIt()"
              className="bg-gray-100 shadow flex items-center mt-10 rounded-full"
            >
              <div className="bg-gray-100 leading-none text-gray-600 rounded-full py-4 px-6">
                Jamón
              </div>
              <div className="bg-[#DC2626] hover:bg-[#B91C1C] duration-300 leading-none text-white rounded-full py-4 px-6">
                Paletilla
              </div>
            </button>
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-7/12 relative w-full mt-12 md:px-8 px-4">
          <img
            src="images/bg-circles.png"
            className="absolute w-full -ml-12 mt-24"
            alt="background circle images"
          />
          <div className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                El prudente
              </h2>
              <p className="text-2xl font-semibold mt-4 text-gray-800">
                10€ / mes
              </p>
            </div>
            <p className="md:w-80 mt-4 text-gray-600">
              1 paquete 150g. de paletilla ibérica todos los meses.
            </p>
          </div>
          <div class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
            <div className="w-2.5 h-auto bg-[#DC2626] rounded-tl-md rounded-bl-md"></div>
            <div className="w-full p-8">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  El moderado
                </h2>
                <p className="text-2xl font-semibold mt-4 text-gray-800">
                  19€ / mes
                </p>
              </div>
              <p className="md:w-80 mt-4 text-gray-600">
                2 paquetes de 150g. de paletilla ibérica todos los meses.
              </p>
            </div>
          </div>
          <div class="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative">
            <div className="w-full p-8">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">
                  El campeón
                </h2>
                <p className="text-2xl font-semibold mt-4 leading-6 text-gray-800">
                  35€ / mes
                </p>
              </div>
              <p className="md:w-80 leading-6 mt-4 text-gray-600">
                4 paquetes de 150g. de paletilla ibérica todos los meses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer showMailSub={false} />
    </>
  );
};

export default Planes;
