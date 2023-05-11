import React from "react";
import MailSub from "./MailSub";

const Footer = ({ showMailSub = true }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      {showMailSub && <MailSub />}
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
