import React, { useState } from "react";
import Navbar from "./Navbar";
import PlanTypeBtn from "./PlanTypeBtn";
import PlanJamon from "./PlanJamon";
import PlanPaletilla from "./PlanPaletilla";
import Footer from "./Footer";

const Planes = () => {
  const [jamonType, setJamonType] = useState(true);
  return (
    <>
      <Navbar />
      <div className="items-center justify-between py-36 lg:flex lg:h-screen">
        <div className="w-full px-4 text-center lg:w-1/2">
          <h1 className="">Elige tu plan maestro</h1>
          <p className="mt-6">
            Escoge entre jamón o paletilla y la cantidad de paquetes que quieres
            recibir al mes.
          </p>
          <PlanTypeBtn setJamonType={setJamonType} />
        </div>
        {jamonType ? <PlanJamon /> : <PlanPaletilla />}
      </div>
      <Footer showMailSub={false} />
    </>
  );
};

export default Planes;
