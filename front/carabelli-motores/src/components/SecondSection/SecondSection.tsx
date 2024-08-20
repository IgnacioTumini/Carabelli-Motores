import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="section-container">
      <div className="middle">
        <h1 className="title title-motors w-75 text-white p-1">
          CONTAMOS CON UN AMPLIO STOCK EN{" "}
          <span className="text-black">REPUESTOS GENIUNOS</span>
        </h1>
        <p className="subtitle w-75 p-1 text-white">
          Usar un repuesto no-original o alternativo puede causar roturas o
          fallas a corto plazo. Para su motor, <strong>Cummins</strong>{" "}
          recomienda
          <strong> repuesto genuinos </strong>
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
