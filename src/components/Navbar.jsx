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
    <div className="fixed z-[100] h-20 w-full bg-white shadow-xl">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
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
          <div onClick={handleNav} className="cursor-pointer px-5 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed right-0 top-0 h-screen w-full bg-black/30 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 h-screen w-[65%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed right-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full justify-end">
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full shadow-lg shadow-gray-400"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="mt-6">
              <ul>
                <Link href="/">
                  <li className="text-md border-b-2 py-6 text-center uppercase">
                    Inicio
                  </li>
                </Link>
                <Link href="/info">
                  <li className="text-md border-b-2 py-6 text-center uppercase">
                    Info
                  </li>
                </Link>
                <Link href="/planes">
                  <li className="text-md border-b-2 py-6 text-center uppercase">
                    Planes
                  </li>
                </Link>
                <Link href="/contacto">
                  <li className="text-md border-b-2 py-6 text-center uppercase">
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
