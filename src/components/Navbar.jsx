import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-xl z-[100] fixed h-20">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/images/logo.png" alt="/" width="70" height="25" />
        </Link>
        <div className="flex flex-col align-middle">
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b-2">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                About
              </li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                Pricing
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b-2">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
