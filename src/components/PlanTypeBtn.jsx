import React from "react";

const PlanTypeBtn = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-6 lg:mt-12">
        <div className="flex bg-white rounded-full shadow-lg">
          <input
            id="jamón"
            type="radio"
            name="switch"
            className="opacity-0 absolute peer/jamón"
            checked
          />
          <label
            for="jamón"
            className="leading-none hover:cursor-pointer text-gray-600 rounded-full py-4 px-6 peer-checked/jamón:cursor-default peer-checked/jamón:bg-[#DC2626] peer-checked/jamón:text-white peer-checked/jamón:rounded-full peer-checked/jamón:py-4 peer-checked/jamón:px-6"
          >
            Jamón
          </label>
          <input
            id="paletilla"
            type="radio"
            name="switch"
            className="opacity-0 absolute peer/paletilla"
          />
          <label
            for="paletilla"
            className=" leading-none hover:cursor-pointer text-gray-600 rounded-full py-4 px-6 peer-checked/paletilla:cursor-default peer-checked/paletilla:bg-[#DC2626] peer-checked/paletilla:text-white peer-checked/paletilla:rounded-full peer-checked/paletilla:py-4 peer-checked/paletilla:px-6"
          >
            Paletilla
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlanTypeBtn;
