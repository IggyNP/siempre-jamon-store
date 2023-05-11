import Link from "next/link";
import React from "react";

const PlanesBtn = () => {
  return (
    <Link href="/planes">
      <button className="bg-[#DC2626] hover:bg-[#B91C1C] duration-300 text-white font-bold px-3 py-2 border border-blue-500 hover:border-transparent rounded uppercase mt-6 md:text-md lg:text-lg">
        Descubre los planes
      </button>
    </Link>
  );
};

export default PlanesBtn;
