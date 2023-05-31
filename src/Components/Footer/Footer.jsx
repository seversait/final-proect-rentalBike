import React from "react";
import "./footer.css";
import logo from "./logo.svg";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">      
      <div className="size">
             <img className="size-logo" width={120} height={120} src={logo} alt="" />
          </div>
		  <div className="kontact">
         
        <p><a href="tel:89999999999">+7999-999-99-99</a></p>
        <p>© VeloMesto 2023</p> 
        <p>Финальный проект 2023</sp>
      </div>
      </div>
    </footer>
  );
};

export default Footer;