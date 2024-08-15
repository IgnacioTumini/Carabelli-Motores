import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/carousel-img/Carrusel-1.jpg";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="carousel-image" src={img1} alt="Imagen 1" />
        <Carousel.Caption>
          <button>Ver mas</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="carousel-image" src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={img1} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
