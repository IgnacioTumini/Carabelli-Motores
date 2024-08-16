import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/carousel-img/Carrusel-1.jpg";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <div className="pt-3">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="carousel-image" src={img1} alt="Imagen 1" />
          <Carousel.Caption>{/* boton de vermas */}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="carousel-image" src={img1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img1} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
