import React from "react";

const MailSub = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-[#ffffff19] px-4 py-7 sm:px-6">
      <h2 className="mb-4 text-center uppercase">
        ¡<span className="text-[#DC2626]">Únete</span> al club de disfrutones!
      </h2>
      <h3 className="mb-6 text-center">
        Suscríbete a nuestro newsletter para estar al tanto de las noticias más
        deliciosas.
      </h3>
      <div>
        <form action="/subscribe" method="POST">
          <input
            type="email"
            placeholder="siempre@disfruton.com"
            className="mb-4
           mr-1 w-full rounded px-2 py-2.5 text-gray-800 focus:outline-none sm:mr-5 sm:w-72 lg:mb-0"
            required
          />
          <button
            type="submit"
            value="submit"
            className="w-full rounded-md bg-[#DC2626] px-5 py-2.5
           uppercase text-white duration-300 hover:bg-[#B91C1C] md:w-auto"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailSub;
