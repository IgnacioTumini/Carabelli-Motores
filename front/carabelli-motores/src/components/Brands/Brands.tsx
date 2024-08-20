import "./Brands.css";
import vavoline from "../../assets/brands-img/Valvoline.png";
import MWM from "../../assets/brands-img/MWM.png";
import MAHEL from "../../assets/brands-img/MAHLE.png";
import cummins from "../../assets/brands-img/Cummins.png";
import fleetguard from "../../assets/brands-img/Fleetguard.png";

function Brands() {
  return (
    <section className="brands-container">
      <div>
        <h1 className="text-center title title-brands mb-5">MARCAS</h1>
        <p className="text-center subtitle subtitle-brands w-50 m-auto mb-5">
          Trabajamos con las mejores marcas del mercado, las cuales garantizan
          seguridad y confiabilidad
        </p>
      </div>
      <div className="images-container">
        <div>
          <img src={cummins} alt="Cummins" className="images" />
        </div>
        <div>
          <img src={fleetguard} alt="Fleetguard" className="images" />
        </div>
        <div>
          <img src={vavoline} alt="Valvoline" className="images" />
        </div>
        <div>
          <img src={MWM} alt="MWM" className="images" />
        </div>
        <div>
          <img src={MAHEL} alt="MAHEL" className="images" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
