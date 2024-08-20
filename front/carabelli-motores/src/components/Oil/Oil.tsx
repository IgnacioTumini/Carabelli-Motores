import "./Oil.css";
import imgAceite from "../../assets/valvoline-aceite.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function OilComponent() {
  return (
    <div className="oil-container">
      <div className="middle">
        <img src={imgAceite} alt="" className="img-oil" />
      </div>
      <div className="middle">
        <div className="text-container">
          <h1 className="title">VALVOLINE, EL ACEITE ORIGINAL PARA TU MOTOR</h1>
          <hr className="linea-roja" />
          <p className="subtitle">
            La mejor opción para el cuidado de tu motor, el aceite Valvoline
            está específicamente formulado para ofrecer una protección superior
            contra el desgaste y la corrosión, optimizando el rendimiento en
            condiciones extremas. Valvoline cumple con las estrictas
            especificaciones de Cummins, lo que garantiza:
          </p>
          <div className="check-container">
            <IoMdCheckmarkCircleOutline className="check-icon" />

            <span className="check-text subtitle">Lubricación efectiva</span>
          </div>
          <div className="check-container">
            <IoMdCheckmarkCircleOutline className="check-icon" />

            <span className="check-text subtitle">
              Mayor durabilidad del motor
            </span>
          </div>
          <div className="check-container ">
            <IoMdCheckmarkCircleOutline className="check-icon" />

            <span className="check-text subtitle ">
              Eficiencia en el consumo de combustible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OilComponent;
