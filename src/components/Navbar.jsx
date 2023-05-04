import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-white shadow-xl z-[100] fixed h-20">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <Image src="/images/logo.png" alt="/" width="70" height="25" />
        </Link>
        <div className="flex flex-col align-middle">
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                Inicio
              </li>
            </Link>
            <Link href="/info">
              <li className="ml-10 text-sm uppercase hover:border-b-2">Info</li>
            </Link>
            <Link href="/planes">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                Planes
              </li>
            </Link>
            <Link href="/contacto">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                Contacto
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden px-5 cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/30" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 h-screen w-[65%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-end">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="mt-6">
              <ul>
                <Link href="/">
                  <li className="py-6 text-center text-md uppercase border-b-2">
                    Inicio
                  </li>
                </Link>
                <Link href="/info">
                  <li className="py-6 text-center text-md uppercase border-b-2">
                    Info
                  </li>
                </Link>
                <Link href="/planes">
                  <li className="py-6 text-center text-md uppercase border-b-2">
                    Planes
                  </li>
                </Link>
                <Link href="/contacto">
                  <li className="py-6 text-center text-md uppercase border-b-2">
                    Contacto
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
