import "./Footer.css";
import logo from "../../../public/carabelli-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container-logo-hr">
        <img src={logo} alt="" className="logo-footer" />
        <hr className="hr-footer" />
      </div>
      <div className="container-description">
        <div className="container-description-footer">
          <div className="">
            <p className="m-0 letras-blod">Horario de atencion:</p>
            <p>Lunes a Viernes de 7:30 - 12:00 | 14:30 - 18:00</p>
          </div>
          <div className="description-divs">
            <p className="letras-blod">Ubicacion:</p>
            <p>Rawson 758, San Andrés de Giles</p>
          </div>
          <div className="description-divs">
            <p className="letras-blod">Telefono: </p>
            <p>02325 - 440704</p>
          </div>
          <div className="description-divs">
            <p className="letras-blod">WhatsApp:</p>
            <p>+54 9 2325 47-6404</p>
          </div>
          <div className="description-divs">
            <p className="letras-blod">Email: </p>
            <p>administracion2@carabellimotores.-com.ar</p>
          </div>
        </div>
        <div>
          <h4>Links</h4>
          <p>
            <a href="">Productos</a>
          </p>
          <p>
            <a href="">Servicios</a>
          </p>
          <p>
            <a href="">Taller</a>
          </p>
          <p>
            <a href="">Productos</a>
          </p>
        </div>
        <div className="container-description-seguinos">
          <h4>Seguinos</h4>
          <p>
            Seguinos en nuestras Redes Sociales y enterate de todos los
            beneficios para tu motor
          </p>
          <a href="">
            <FaInstagram className="icon-redes" />
          </a>
          <a href="">
            <FaFacebook className="icon-redes" />
          </a>
        </div>
      </div>
      <hr className="hr-footer-bottom" />
      <div className="derechos">
        <FaRegCopyright />
        <p className="m-0">Copyright FourTech Studio All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
