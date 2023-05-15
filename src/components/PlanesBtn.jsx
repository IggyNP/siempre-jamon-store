import Link from "next/link";
import React from "react";

const PlanesBtn = () => {
  return (
    <Link href="/planes">
      <button className="md:text-md mt-6 rounded border bg-[#DC2626] px-3 py-2 font-bold uppercase text-white duration-300 hover:border-transparent hover:bg-[#B91C1C] lg:text-lg">
        Descubre los planes
      </button>
    </Link>
  );
};

export default PlanesBtn;
