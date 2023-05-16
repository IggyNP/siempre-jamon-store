import React, { useState } from "react";
import PlanTypeBtn from "./PlanTypeBtn";
import PlanJamon from "./PlanJamon";
import PlanPaletilla from "./PlanPaletilla";

const Planes = () => {
  const [jamonType, setJamonType] = useState(true);
  return (
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
  );
};

export default Planes;
