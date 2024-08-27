import React from "react";
import "./ContactScreen.css";
import imgcontact from "../../assets/Contacto.jpg";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Maps from "../../components/Maps/Maps";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactScreen: React.FC = () => {
  return (
    <div className="contact-container mb-5">
      <img
        src={imgcontact}
        alt="imagen contacto"
        className="img-contact mb-4"
      />
      <h1 className="title text-center title-contact mb-4">CONTACTO</h1>
      <p className="subtitle  text-center w-50 m-auto mb-5">
        Estamos para ayudarte, completa el formulario o elige el metodo de
        contacto que prefieras, y te respondemos lo antes posible.
      </p>
      <div className="contact-sections">
        <section className="contact-info">
          <div className="info">
            <ImLocation className="icon" />
            <div>
              <h2 className="mb-0 fs-5">UBICACIÓN</h2>
              <p>Rawson 758, San Andres de Giles Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="info">
            <FaPhoneAlt className="icon" />
            <div>
              <h2 className="mb-0 fs-5">TELEFONO</h2>
              <p className="mb-0">02325 - 440704</p>
              <p>+54 9 2325 47-6404</p>
            </div>
          </div>
          <div className="info">
            <IoIosMail className="icon" />
            <div>
              <h2 className="mb-0 fs-5">EMAIL</h2>
              <p className="mb-0">garantias@carabellimotores.com</p>
              <p>administración2@carabellimotores.-com.ar</p>
            </div>
          </div>
          <Maps />
        </section>
        <section className="contact-form">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactScreen;
