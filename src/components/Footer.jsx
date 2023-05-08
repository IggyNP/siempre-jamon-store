import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-col justify-between items-center sm:px-6 px-4 bg-[#ffffff19] py-7">
        <h2 className="mb-4 text-center uppercase">
          ¡<span className="text-[#DC2626]">Únete</span> al club de disfrutones!
        </h2>
        <h3 className="text-center mb-6">
          Suscríbete a nuestro newsletter para estar al tanto de las noticias
          más deliciosas.
        </h3>
        <div>
          <form action="/subscribe" method="POST">
            <input
              type="email"
              placeholder="siempre@disfruton.com"
              className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
              required
            />
            <button
              type="submit"
              value="submit"
              className="bg-[#DC2626] hover:bg-[#B91C1C] duration-300 px-5 py-2.5
           rounded-md text-white md:w-auto w-full uppercase"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div
        className="flex flex-col justify-center gap-10
      text-center pt-3 text-gray-400 text-sm pb-8"
      >
        <p>
          Copyright © {currentYear} Siempre Jamón | Developed by{" "}
          <a href="https://github.com/IggyNP" className="hover:text-[#DC2626]">
            IggyNP
          </a>
        </p>
        <p>Terms · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;