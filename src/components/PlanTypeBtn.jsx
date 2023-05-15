import React from "react";

const PlanTypeBtn = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 lg:mt-12">
        <div className="relative inline-flex rounded-full bg-white shadow-lg">
          <input
            id="jamón"
            type="radio"
            name="switch"
            className="hidden peer/jamón"
            defaultChecked
          />
          <label
            htmlFor="jamón"
            className="select-none z-10 leading-none cursor-pointer rounded-full py-4 px-6 peer-checked/jamón:cursor-default peer-checked/jamón:text-white transition-all duration-300 ease-in-out"
          >
            Jamón
          </label>
          <input
            id="paletilla"
            type="radio"
            name="switch"
            className="hidden peer/paletilla"
          />
          <label
            htmlFor="paletilla"
            className="select-none z-10 leading-none cursor-pointer rounded-full py-4 px-6 peer-checked/paletilla:cursor-default peer-checked/paletilla:text-white transition-all duration-300 ease-in-out"
          >
            Paletilla
          </label>
          <div className="absolute inset-y-0 left-0 z-0 w-1/2 rounded-full bg-[#DC2626] transform peer-checked/paletilla:translate-x-full transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanTypeBtn;
