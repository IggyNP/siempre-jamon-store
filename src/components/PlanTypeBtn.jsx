import React from "react";

const PlanTypeBtn = ({ setJamonType }) => {
  return (
    <div className="mt-6 flex justify-center lg:mt-12">
      <div className="relative inline-flex rounded-full bg-white shadow-lg">
        <input
          id="jamón"
          type="radio"
          name="switch"
          className="peer/jamón hidden"
          defaultChecked
          onChange={() => setJamonType(true)}
        />
        <label
          htmlFor="jamón"
          className="z-10 cursor-pointer select-none rounded-full px-6 py-4 leading-none transition-all duration-300 ease-in-out peer-checked/jamón:cursor-default peer-checked/jamón:text-white"
        >
          Jamón
        </label>
        <input
          id="paletilla"
          type="radio"
          name="switch"
          className="peer/paletilla hidden"
          onChange={() => setJamonType(false)}
        />
        <label
          htmlFor="paletilla"
          className="z-10 cursor-pointer select-none rounded-full px-6 py-4 leading-none transition-all duration-300 ease-in-out peer-checked/paletilla:cursor-default peer-checked/paletilla:text-white"
        >
          Paletilla
        </label>
        <div className="absolute inset-y-0 left-0 z-0 w-1/2 transform rounded-full bg-[#DC2626] transition-all duration-300 ease-in-out peer-checked/paletilla:translate-x-full"></div>
      </div>
    </div>
  );
};

export default PlanTypeBtn;
