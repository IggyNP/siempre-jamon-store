import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "¿Cuánto tiempo tardará en llegar mi jamón?",
    answer:
      "Normalmente se tarda entre 1 y 2 días hábiles en realizar la entrega desde que se envía. Los suscriptores pueden elegir la fecha de envío, que será recurrente mes a mes.",
  },
  {
    question: "¿Puedo modificar mi suscripción mensual de jamón?",
    answer:
      "Sí, puedes modificar tu suscripción mensual de Siempre Jamón. Simplemente inicia sesión en tu cuenta y realiza los cambios que desees. Ten en cuenta que la modificación de la suscripción debe realizarse antes de la fecha de facturación para evitar cargos adicionales.",
  },
  {
    question: "¿Cómo se envía el jamón?",
    answer:
      "Se envía envasado al vacío y cuidadosamente empaquetado para garantizar que llegue en perfectas condiciones. Utilizamos un servicio de mensajería de confianza para realizar las entregas.",
  },
  {
    question: "¿Puedo cancelar mi suscripción mensual en cualquier momento?",
    answer:
      "Sí, puedes cancelar tu suscripción mensual de Siempre Jamón en cualquier momento. Simplemente inicia sesión en tu cuenta y cancela la suscripción. Ten en cuenta que la cancelación de la suscripción debe realizarse antes de la fecha de facturación para evitar cargos adicionales.",
  },
  {
    question:
      "¿Puedo cambiar la dirección de entrega de mi suscripción mensual de jamón?",
    answer:
      "Sí, puedes cambiar la dirección de entrega de tu suscripción mensual de Siempre Jamón. Simplemente inicia sesión en tu cuenta y actualiza la información de envío antes de la fecha de facturación para garantizar que tu jamón llegue a la dirección correcta.",
  },
  {
    question: "¿Qué pasa si no estoy en casa cuando se entregue mi pedido?",
    answer:
      "Si no estás en casa cuando se entregue tu suscripción mensual de jamón serrano, el servicio de mensajería intentará dejar el paquete en un lugar seguro, como en el buzón o en la entrada del domicilio, siempre y cuando sea posible y seguro hacerlo. Si no se puede dejar el paquete en un lugar seguro, el servicio de mensajería dejará una nota de aviso en tu puerta y te informará sobre cómo proceder para programar la entrega en un horario o día diferente o para recoger tu jamón serrano en la oficina de mensajería más cercana.",
  },
];

const Faq = () => {
  const [expand, setExpand] = useState(null);

  const toggle = (i) => {
    if (expand === i) {
      return setExpand(null);
    }
    setExpand(i);
  };

  return (
    <div className="flex w-full flex-col items-center pb-36">
      <h2 className="mb-6 py-6">Preguntas frecuentes</h2>
      {faqData.map((item, i) => (
        <div
          className="flex w-full cursor-pointer select-none flex-col items-center rounded border border-gray-400 shadow md:w-[60%]"
          onClick={() => toggle(i)}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <h3 className="p-4">{item.question}</h3>
            <button
              aria-label="question-expander"
              className="p-4 text-xl focus:outline-none"
              onClick={() => toggle(i)}
            >
              {expand === i ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="origin-center rotate-180 duration-300
                    ease-in-out"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" transition-transform duration-300
                    ease-in-out"
                />
              )}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in ${
              expand === i ? "max-h-60" : "max-h-0"
            }`}
          >
            <p className="px-4 pb-4">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
