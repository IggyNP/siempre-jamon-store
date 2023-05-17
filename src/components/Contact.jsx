import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-36 text-center">
      <h1>¿Tienes alguna pregunta?</h1>
      <p className="mt-6">
        ¡No tengas miedo! Alguien con hábiles pezuñas no tardará en responderte.
      </p>
      <div className="w-[75%] pt-20 lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 w-full text-left">
            <label htmlFor="name" className="mb-2 block text-lg">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded border border-gray-300 p-2 shadow-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="email" className="mb-2 block text-lg">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded border border-gray-300 p-2 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="message" className="mb-2 block text-lg">
              Mensaje
            </label>
            <textarea
              id="message"
              className="w-full rounded border border-gray-300 px-2 pb-10 pt-2 shadow-sm"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded bg-[#DC2626] px-4 py-2 text-white hover:bg-[#B91C1C] lg:px-6 lg:py-3"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
