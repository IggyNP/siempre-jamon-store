import Link from "next/link";
import React from "react";

const PlanesBtn = () => {
  return (
    <Link href="/planes">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 border border-blue-500 hover:border-transparent rounded uppercase mt-6 md:text-md lg:text-lg">
        Descubre los planes
      </button>
    </Link>
  );
};

export default PlanesBtn;
